define(["exports", "../polymer/polymer-legacy.js"], function (_exports, _polymerLegacy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AppStorageBehavior = void 0;

  /**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
  var SPLICES_RX = /\.splices$/;
  var LENGTH_RX = /\.length$/;
  var NUMBER_RX = /\.?#?([0-9]+)$/;
  /**
   * AppStorageBehavior is an abstract behavior that makes it easy to
   * synchronize in-memory data and a persistent storage system, such as
   * the browser's IndexedDB, or a remote database like Firebase.
   *
   * For examples of how to use this behavior to write your own app storage
   * elements see `<app-localstorage-document>` here, or check out
   * [polymerfire](https://github.com/Firebase/polymerfire) and
   * [app-pouchdb](https://github.com/PolymerElements/app-pouchdb).
   *
   * @polymerBehavior
   */

  const AppStorageBehavior = {
    properties: {
      /**
       * The data to synchronize.
       */
      data: {
        type: Object,
        notify: true,
        value: function () {
          return this.zeroValue;
        }
      },

      /**
       * If this is true transactions will happen one after the other,
       * never in parallel.
       *
       * Specifically, no transaction will begin until every previously
       * enqueued transaction by this element has completed.
       *
       * If it is false, new transactions will be executed as they are
       * received.
       */
      sequentialTransactions: {
        type: Boolean,
        value: false
      },

      /**
       * When true, will perform detailed logging.
       */
      log: {
        type: Boolean,
        value: false
      }
    },
    observers: ['__dataChanged(data.*)'],

    /** @override */
    created: function () {
      this.__initialized = false;
      this.__syncingToMemory = false;
      this.__initializingStoredValue = null;
      this.__transactionQueueAdvances = Promise.resolve();
    },

    /** @override */
    ready: function () {
      this._initializeStoredValue();
    },

    /**
     * Override this getter to return true if the value has never been
     * persisted to storage.
     *
     * @return {boolean}
     */
    get isNew() {
      return true;
    },

    /**
     * A promise that will resolve once all queued transactions
     * have completed.
     *
     * This field is updated as new transactions are enqueued, so it will
     * only wait for transactions which were enqueued when the field
     * was accessed.
     *
     * This promise never rejects.
     *
     * @return {Promise}
     */
    get transactionsComplete() {
      return this.__transactionQueueAdvances;
    },

    /**
     * Override this getter to define the default value to use when
     * there's no data stored.
     *
     * @return {*}
     */
    get zeroValue() {
      return undefined;
    },

    /**
     * Override this method.
     *
     * If the data value represented by this storage instance is new, this
     * method generates an attempt to write the value to storage.
     *
     *
     * @param {*} args
     * @return {Promise} a Promise that settles only once the write has.
     */
    saveValue: function (args) {
      return Promise.resolve();
    },

    /**
     * Optional. Override this method to clear out the mapping of this
     * storage object and a logical location within storage.
     *
     * If this method is supported, after it's called, isNew() should be
     * true.
     */
    reset: function () {},

    /**
     * Remove the data from storage.
     *
     * @return {Promise} A promise that settles once the destruction is
     *   complete.
     */
    destroy: function () {
      this.data = this.zeroValue;
      return this.saveValue();
    },

    /**
     * Perform the initial sync between storage and memory. This method
     * is called automatically while the element is being initialized.
     * Implementations may override it.
     *
     * If an implementation intends to call this method, it should instead
     * call _initializeStoredValue, which provides reentrancy protection.
     *
     * @return {Promise} A promise that settles once this process is
     *     complete.
     */
    initializeStoredValue: function () {
      if (this.isNew) {
        return Promise.resolve();
      } // If this is not a "new" model, then we should attempt
      // to read an initial value from storage:


      return this._getStoredValue('data').then(function (data) {
        this._log('Got stored value!', data, this.data);

        if (data == null) {
          return this._setStoredValue('data', this.data || this.zeroValue);
        } else {
          this.syncToMemory(function () {
            this.set('data', data);
          });
        }
      }.bind(this));
    },

    /**
     * Override this method to implement reading a value from storage.
     *
     *
     * @param {string} storagePath The path (through storage) of the value to
     *   create, relative to the root of storage associated with this instance.
     * @return {Promise} A promise that resolves with the canonical value stored
     *   at the provided path when the transaction has completed. _If there is no
     *   such value at the provided path through storage, then the promise will
     *   resolve to `undefined`._ The promise will be rejected if the transaction
     *   fails for any reason.
     */
    getStoredValue: function (storagePath) {
      return Promise.resolve();
    },

    /**
     * Override this method to implement creating and updating
     * stored values.
     *
     *
     * @param {string} storagePath The path of the value to update, relative
     *   to the root storage path configured for this instance.
     * @param {*} value The updated in-memory value to apply to the stored value
     *   at the provided path.
     * @return {Promise} A promise that resolves with the canonical value stored
     *   at the provided path when the transaction has completed. The promise
     *   will be rejected if the transaction fails for any reason.
     */
    setStoredValue: function (storagePath, value) {
      return Promise.resolve(value);
    },

    /**
     * Maps a Polymer databinding path to the corresponding path in the
     * storage system. Override to define a custom mapping.
     *
     * The inverse of storagePathToMemoryPath.
     *
     * @param {string} path An in-memory path through a storage object.
     * @return {string} The provided path mapped to the equivalent location in
     *   storage. This mapped version of the path is suitable for use with the
     *   CRUD operations on both memory and storage.
     */
    memoryPathToStoragePath: function (path) {
      return path;
    },

    /**
     * Maps a storage path to the corresponding Polymer databinding path.
     * Override to define a custom mapping.
     *
     * The inverse of memoryPathToStoragePath.
     *
     * @param {string} path The storage path through a storage object.
     * @return {string} The provided path through storage mapped to the
     *   equivalent Polymer path through the in-memory representation of storage.
     */
    storagePathToMemoryPath: function (path) {
      return path;
    },

    /**
     * Enables performing transformations on the in-memory representation of
     * storage without activating observers that will cause those
     * transformations to be re-applied to the storage backend. This is useful
     * for preventing redundant (or cyclical) application of transformations.
     *
     * @param {Function} operation A function that will perform the desired
     *   transformation. It will be called synchronously, when it is safe to
     *   apply the transformation.
     */
    syncToMemory: function (operation) {
      if (this.__syncingToMemory) {
        return;
      }

      this._group('Sync to memory.');

      this.__syncingToMemory = true;
      operation.call(this);
      this.__syncingToMemory = false;

      this._groupEnd('Sync to memory.');
    },

    /**
     * A convenience method. Returns true iff value is null, undefined,
     * an empty array, or an object with no keys.
     */
    valueIsEmpty: function (value) {
      if (Array.isArray(value)) {
        return value.length === 0;
      } else if (Object.prototype.isPrototypeOf(value)) {
        return Object.keys(value).length === 0;
      } else {
        return value == null;
      }
    },

    /**
     * Like `getStoredValue` but called with a Polymer path rather than
     * a storage path.
     *
     * @param {string} path The Polymer path to get.
     * @return {Promise} A Promise of the value stored at that path.
     */
    _getStoredValue: function (path) {
      return this.getStoredValue(this.memoryPathToStoragePath(path));
    },

    /**
     * Like `setStoredValue` but called with a Polymer path rather than
     * a storage path.
     *
     * @param {string} path The Polymer path to update.
     * @param {*} value The updated in-memory value to apply to the stored value
     *   at the provided path.
     * @return {Promise} A promise that resolves with the canonical value stored
     *   at the provided path when the transaction has completed. The promise
     *   will be rejected if the transaction fails for any reason.
     */
    _setStoredValue: function (path, value) {
      return this.setStoredValue(this.memoryPathToStoragePath(path), value);
    },

    /**
     * Enqueues the given function in the transaction queue.
     *
     * The transaction queue allows for optional parallelism/sequentiality
     * via the `sequentialTransactions` boolean property, as well as giving
     * the user a convenient way to wait for all pending transactions to
     * finish.
     *
     * The given function may be called immediately or after an arbitrary
     * delay. Its `this` context will be bound to the element.
     *
     * If the transaction performs any asynchronous operations it must
     * return a promise.
     *
     * @param {Function} transaction A function implementing the transaction.
     * @return {Promise} A promise that resolves once the transaction has
     *   finished. This promise will never reject.
     */
    _enqueueTransaction: function (transaction) {
      if (this.sequentialTransactions) {
        transaction = transaction.bind(this);
      } else {
        var result = transaction.call(this);

        transaction = function () {
          return result;
        };
      }

      return this.__transactionQueueAdvances = this.__transactionQueueAdvances.then(transaction).catch(function (error) {
        this._error('Error performing queued transaction.', error);
      }.bind(this));
    },

    /**
     * A wrapper around `console.log`.
     * @param {...*} args
     * @override
     */
    _log: function (...args) {
      if (this.log) {
        console.log.apply(console, args);
      }
    },

    /**
     * A wrapper around `console.error`.
     * @param {...*} args
     * @override
     */
    _error: function (...args) {
      if (this.log) {
        console.error.apply(console, args);
      }
    },

    /**
     * A wrapper around `console.group`.
     * @param {...*} args
     */
    _group: function (...args) {
      if (this.log) {
        console.group.apply(console, args);
      }
    },

    /**
     * A wrapper around `console.groupEnd`.
     * @param {...*} args
     */
    _groupEnd: function (...args) {
      if (this.log) {
        console.groupEnd.apply(console, args);
      }
    },

    /**
     * A reentrancy-save wrapper around `this.initializeStoredValue`.
     * Prefer calling this method over that one.
     *
     * @return {Promise} The result of calling `initializeStoredValue`,
     *   or `undefined` if called while initializing.
     */
    _initializeStoredValue: function () {
      if (this.__initializingStoredValue) {
        return null;
      }

      this._group('Initializing stored value.');

      var initializingStoredValue = this.__initializingStoredValue = this.initializeStoredValue().then(function () {
        this.__initialized = true;
        this.__initializingStoredValue = null;

        this._groupEnd('Initializing stored value.');
      }.bind(this)).catch(function (e) {
        this.__initializingStoredValue = null;

        this._groupEnd('Initializing stored value.');
      }.bind(this));
      return this._enqueueTransaction(function () {
        return initializingStoredValue;
      });
    },
    __dataChanged: function (change) {
      if (this.isNew || this.__syncingToMemory || !this.__initialized || this.__pathCanBeIgnored(change.path)) {
        return;
      }

      var path = this.__normalizeMemoryPath(change.path);

      var value = change.value;
      var indexSplices = value && value.indexSplices;

      this._enqueueTransaction(function () {
        this._log('Setting', path + ':', indexSplices || value);

        if (indexSplices && this.__pathIsSplices(path)) {
          path = this.__parentPath(path);
          value = this.get(path);
        }

        return this._setStoredValue(path, value);
      });
    },
    __normalizeMemoryPath: function (path) {
      var parts = path.split('.');
      var parentPath = [];
      var currentPath = [];
      var normalizedPath = [];
      var index;

      for (var i = 0; i < parts.length; ++i) {
        currentPath.push(parts[i]);

        if (/^#/.test(parts[i])) {
          normalizedPath.push(this.get(parentPath).indexOf(this.get(currentPath)));
        } else {
          normalizedPath.push(parts[i]);
        }

        parentPath.push(parts[i]);
      }

      return normalizedPath.join('.');
    },
    __parentPath: function (path) {
      var parentPath = path.split('.');
      return parentPath.slice(0, parentPath.length - 1).join('.');
    },
    __pathCanBeIgnored: function (path) {
      return LENGTH_RX.test(path) && Array.isArray(this.get(this.__parentPath(path)));
    },
    __pathIsSplices: function (path) {
      return SPLICES_RX.test(path) && Array.isArray(this.get(this.__parentPath(path)));
    },
    __pathRefersToArray: function (path) {
      return (SPLICES_RX.test(path) || LENGTH_RX.test(path)) && Array.isArray(this.get(this.__parentPath(path)));
    },
    __pathTailToIndex: function (path) {
      var tail = path.split('.').pop();
      return window.parseInt(tail.replace(NUMBER_RX, '$1'), 10);
    }
  };
  _exports.AppStorageBehavior = AppStorageBehavior;
});