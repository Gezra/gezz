define(["exports", "../utils/boot.js", "../mixins/property-effects.js", "../mixins/mutable-data.js", "../mixins/gesture-event-listeners.js", "../utils/settings.js", "../utils/wrap.js", "../utils/hide-template-controls.js"], function (_exports, _boot, _propertyEffects, _mutableData, _gestureEventListeners, _settings, _wrap, _hideTemplateControls) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DomBind = void 0;

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
   * @constructor
   * @extends {HTMLElement}
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_OptionalMutableData}
   * @implements {Polymer_GestureEventListeners}
   * @private
   */
  const domBindBase = (0, _gestureEventListeners.GestureEventListeners)((0, _mutableData.OptionalMutableData)((0, _propertyEffects.PropertyEffects)(HTMLElement)));
  /**
   * Custom element to allow using Polymer's template features (data binding,
   * declarative event listeners, etc.) in the main document without defining
   * a new custom element.
   *
   * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
   * element, which will immediately stamp the wrapped template into the main
   * document and bind elements to the `dom-bind` element itself as the
   * binding scope.
   *
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @appliesMixin OptionalMutableData
   * @appliesMixin GestureEventListeners
   * @extends {domBindBase}
   * @summary Custom element to allow using Polymer's template features (data
   *   binding, declarative event listeners, etc.) in the main document.
   */

  class DomBind extends domBindBase {
    static get observedAttributes() {
      return ['mutable-data'];
    }

    constructor() {
      super();

      if (_settings.strictTemplatePolicy) {
        throw new Error(`strictTemplatePolicy: dom-bind not allowed`);
      }

      this.root = null;
      this.$ = null;
      this.__children = null;
    }
    /* eslint-disable no-unused-vars */

    /**
     * @override
     * @param {string} name Name of attribute that changed
     * @param {?string} old Old attribute value
     * @param {?string} value New attribute value
     * @param {?string} namespace Attribute namespace.
     * @return {void}
     */


    attributeChangedCallback(name, old, value, namespace) {
      // assumes only one observed attribute
      this.mutableData = true;
    }
    /**
     * @override
     * @return {void}
     */


    connectedCallback() {
      if (!(0, _hideTemplateControls.hideElementsGlobally)()) {
        this.style.display = 'none';
      }

      this.render();
    }
    /**
     * @override
     * @return {void}
     */


    disconnectedCallback() {
      this.__removeChildren();
    }

    __insertChildren() {
      (0, _wrap.wrap)((0, _wrap.wrap)(this).parentNode).insertBefore(this.root, this);
    }

    __removeChildren() {
      if (this.__children) {
        for (let i = 0; i < this.__children.length; i++) {
          this.root.appendChild(this.__children[i]);
        }
      }
    }
    /**
     * Forces the element to render its content. This is typically only
     * necessary to call if HTMLImports with the async attribute are used.
     * @return {void}
     */


    render() {
      let template;

      if (!this.__children) {
        template =
        /** @type {?HTMLTemplateElement} */
        template || this.querySelector('template');

        if (!template) {
          // Wait until childList changes and template should be there by then
          let observer = new MutationObserver(() => {
            template =
            /** @type {HTMLTemplateElement} */
            this.querySelector('template');

            if (template) {
              observer.disconnect();
              this.render();
            } else {
              throw new Error('dom-bind requires a <template> child');
            }
          });
          observer.observe(this, {
            childList: true
          });
          return;
        }

        this.root = this._stampTemplate(
        /** @type {!HTMLTemplateElement} */
        template);
        this.$ = this.root.$;
        this.__children = [];

        for (let n = this.root.firstChild; n; n = n.nextSibling) {
          this.__children[this.__children.length] = n;
        }

        this._enableProperties();
      }

      this.__insertChildren();

      this.dispatchEvent(new CustomEvent('dom-change', {
        bubbles: true,
        composed: true
      }));
    }

  }

  _exports.DomBind = DomBind;
  customElements.define('dom-bind', DomBind);
});