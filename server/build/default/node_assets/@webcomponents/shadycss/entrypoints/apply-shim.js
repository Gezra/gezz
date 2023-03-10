define(["../src/apply-shim.js", "../src/template-map.js", "../src/style-util.js", "../src/apply-shim-utils.js", "../src/common-utils.js", "../src/custom-style-interface.js", "../src/style-settings.js"], function (_applyShim, _templateMap, _styleUtil, ApplyShimUtils, _commonUtils, _customStyleInterface, _styleSettings) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  _applyShim = babelHelpers.interopRequireDefault(_applyShim);
  _templateMap = babelHelpers.interopRequireDefault(_templateMap);
  ApplyShimUtils = babelHelpers.interopRequireWildcard(ApplyShimUtils);
  // eslint-disable-line no-unused-vars

  /** @const {ApplyShim} */
  const applyShim = new _applyShim.default();

  class ApplyShimInterface {
    constructor() {
      /** @type {?CustomStyleInterfaceInterface} */
      this.customStyleInterface = null;
      applyShim['invalidCallback'] = ApplyShimUtils.invalidate;
    }

    ensure() {
      if (this.customStyleInterface) {
        return;
      }

      if (window.ShadyCSS.CustomStyleInterface) {
        this.customStyleInterface =
        /** @type {!CustomStyleInterfaceInterface} */
        window.ShadyCSS.CustomStyleInterface;

        this.customStyleInterface['transformCallback'] = style => {
          applyShim.transformCustomStyle(style);
        };

        this.customStyleInterface['validateCallback'] = () => {
          requestAnimationFrame(() => {
            if (this.customStyleInterface['enqueued']) {
              this.flushCustomStyles();
            }
          });
        };
      }
    }
    /**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */


    prepareTemplate(template, elementName) {
      this.ensure();

      if ((0, _styleUtil.elementHasBuiltCss)(template)) {
        return;
      }

      _templateMap.default[elementName] = template;
      let ast = applyShim.transformTemplate(template, elementName); // save original style ast to use for revalidating instances

      template['_styleAst'] = ast;
    }

    flushCustomStyles() {
      this.ensure();

      if (!this.customStyleInterface) {
        return;
      }

      let styles = this.customStyleInterface['processStyles']();

      if (!this.customStyleInterface['enqueued']) {
        return;
      }

      for (let i = 0; i < styles.length; i++) {
        let cs = styles[i];
        let style = this.customStyleInterface['getStyleForCustomStyle'](cs);

        if (style) {
          applyShim.transformCustomStyle(style);
        }
      }

      this.customStyleInterface['enqueued'] = false;
    }
    /**
     * @param {HTMLElement} element
     * @param {Object=} properties
     */


    styleSubtree(element, properties) {
      this.ensure();

      if (properties) {
        (0, _commonUtils.updateNativeProperties)(element, properties);
      }

      if (element.shadowRoot) {
        this.styleElement(element);
        let shadowChildren =
        /** @type {!ParentNode} */
        element.shadowRoot.children || element.shadowRoot.childNodes;

        for (let i = 0; i < shadowChildren.length; i++) {
          this.styleSubtree(
          /** @type {HTMLElement} */
          shadowChildren[i]);
        }
      } else {
        let children = element.children || element.childNodes;

        for (let i = 0; i < children.length; i++) {
          this.styleSubtree(
          /** @type {HTMLElement} */
          children[i]);
        }
      }
    }
    /**
     * @param {HTMLElement} element
     */


    styleElement(element) {
      this.ensure();
      let {
        is
      } = (0, _styleUtil.getIsExtends)(element);
      let template = _templateMap.default[is];

      if (template && (0, _styleUtil.elementHasBuiltCss)(template)) {
        return;
      }

      if (template && !ApplyShimUtils.templateIsValid(template)) {
        // only revalidate template once
        if (!ApplyShimUtils.templateIsValidating(template)) {
          this.prepareTemplate(template, is);
          ApplyShimUtils.startValidatingTemplate(template);
        } // update this element instance


        let root = element.shadowRoot;

        if (root) {
          let style =
          /** @type {HTMLStyleElement} */
          root.querySelector('style');

          if (style) {
            // reuse the template's style ast, it has all the original css text
            style['__cssRules'] = template['_styleAst'];
            style.textContent = (0, _styleUtil.toCssText)(template['_styleAst']);
          }
        }
      }
    }
    /**
     * @param {Object=} properties
     */


    styleDocument(properties) {
      this.ensure();
      this.styleSubtree(document.body, properties);
    }

  }

  if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
    const applyShimInterface = new ApplyShimInterface();
    let CustomStyleInterface = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
    /** @suppress {duplicate} */

    window.ShadyCSS = {
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplate(template, elementName, elementExtends) {
        // eslint-disable-line no-unused-vars
        applyShimInterface.flushCustomStyles();
        applyShimInterface.prepareTemplate(template, elementName);
      },

      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplateStyles(template, elementName, elementExtends) {
        window.ShadyCSS.prepareTemplate(template, elementName, elementExtends);
      },

      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       */
      prepareTemplateDom(template, elementName) {},

      // eslint-disable-line no-unused-vars

      /**
       * @param {!HTMLElement} element
       * @param {Object=} properties
       */
      styleSubtree(element, properties) {
        applyShimInterface.flushCustomStyles();
        applyShimInterface.styleSubtree(element, properties);
      },

      /**
       * @param {!HTMLElement} element
       */
      styleElement(element) {
        applyShimInterface.flushCustomStyles();
        applyShimInterface.styleElement(element);
      },

      /**
       * @param {Object=} properties
       */
      styleDocument(properties) {
        applyShimInterface.flushCustomStyles();
        applyShimInterface.styleDocument(properties);
      },

      /**
       * @param {Element} element
       * @param {string} property
       * @return {string}
       */
      getComputedStyleValue(element, property) {
        return (0, _commonUtils.getComputedStyleValue)(element, property);
      },

      flushCustomStyles() {
        applyShimInterface.flushCustomStyles();
      },

      nativeCss: _styleSettings.nativeCssVariables,
      nativeShadow: _styleSettings.nativeShadow,
      cssBuild: _styleSettings.cssBuild,
      disableRuntime: _styleSettings.disableRuntime
    };

    if (CustomStyleInterface) {
      window.ShadyCSS.CustomStyleInterface = CustomStyleInterface;
    }
  }

  window.ShadyCSS.ApplyShim = applyShim;
});