define(["exports", "./boot.js", "./debounce.js"], function (_exports, _boot, _debounce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "enqueueDebouncer", {
    enumerable: true,
    get: function () {
      return _debounce.enqueueDebouncer;
    }
  });
  _exports.flush = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @return {void}
   */
  const flush = function () {
    let shadyDOM, debouncers;

    do {
      shadyDOM = window.ShadyDOM && ShadyDOM.flush();

      if (window.ShadyCSS && window.ShadyCSS.ScopingShim) {
        window.ShadyCSS.ScopingShim.flush();
      }

      debouncers = (0, _debounce.flushDebouncers)();
    } while (shadyDOM || debouncers);
  };

  _exports.flush = flush;
});