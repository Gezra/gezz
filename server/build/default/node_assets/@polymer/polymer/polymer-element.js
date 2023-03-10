define(["exports", "./lib/mixins/element-mixin.js", "./lib/utils/html-tag.js"], function (_exports, _elementMixin, _htmlTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "version", {
    enumerable: true,
    get: function () {
      return _elementMixin.version;
    }
  });
  Object.defineProperty(_exports, "html", {
    enumerable: true,
    get: function () {
      return _htmlTag.html;
    }
  });
  _exports.PolymerElement = void 0;

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
   * Base class that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * @customElement
   * @polymer
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends HTMLElement
   * @appliesMixin ElementMixin
   * @summary Custom element base class that provides the core API for Polymer's
   *   key meta-programming features including template stamping, data-binding,
   *   attribute deserialization, and property change observation
   */
  const PolymerElement = (0, _elementMixin.ElementMixin)(HTMLElement);
  _exports.PolymerElement = PolymerElement;
});