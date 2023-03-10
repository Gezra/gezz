define(["exports", "../../polymer/polymer-legacy.js", "../../iron-resizable-behavior/iron-resizable-behavior.js", "../../polymer/lib/legacy/polymer.dom.js", "../../polymer/lib/utils/async.js", "../../polymer/lib/utils/debounce.js", "../../polymer/lib/utils/flush.js"], function (_exports, _polymerLegacy, _ironResizableBehavior, _polymerDom, _async, _debounce, _flush) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AppLayoutBehavior = void 0;

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

  /**
   * @polymerBehavior
   */
  const AppLayoutBehavior = [_ironResizableBehavior.IronResizableBehavior, {
    listeners: {
      'app-reset-layout': '_appResetLayoutHandler',
      'iron-resize': 'resetLayout'
    },
    attached: function () {
      this.fire('app-reset-layout');
    },
    _appResetLayoutHandler: function (e) {
      if ((0, _polymerDom.dom)(e).path[0] === this) {
        return;
      }

      this.resetLayout();
      e.stopPropagation();
    },
    _updateLayoutStates: function () {
      console.error('unimplemented');
    },

    /**
     * Resets the layout. If you changed the size of this element via CSS
     * you can notify the changes by either firing the `iron-resize` event
     * or calling `resetLayout` directly.
     *
     * @method resetLayout
     */
    resetLayout: function () {
      var self = this;

      var cb = this._updateLayoutStates.bind(this);

      this._layoutDebouncer = _debounce.Debouncer.debounce(this._layoutDebouncer, _async.animationFrame, cb);
      (0, _flush.enqueueDebouncer)(this._layoutDebouncer);

      this._notifyDescendantResize();
    },
    _notifyLayoutChanged: function () {
      var self = this; // TODO: the event `app-reset-layout` can be fired synchronously
      // as long as `_updateLayoutStates` waits for all the microtasks after
      // rAF. E.g. requestAnimationFrame(setTimeOut())

      requestAnimationFrame(function () {
        self.fire('app-reset-layout');
      });
    },
    _notifyDescendantResize: function () {
      if (!this.isAttached) {
        return;
      }

      this._interestedResizables.forEach(function (resizable) {
        if (this.resizerShouldNotify(resizable)) {
          this._notifyDescendant(resizable);
        }
      }, this);
    }
  }];
  _exports.AppLayoutBehavior = AppLayoutBehavior;
});