define(["../src/custom-style-interface.js", "../src/common-utils.js", "../src/style-settings.js"], function (_customStyleInterface, _commonUtils, _styleSettings) {
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

  _customStyleInterface = babelHelpers.interopRequireDefault(_customStyleInterface);
  const customStyleInterface = new _customStyleInterface.default();

  if (!window.ShadyCSS) {
    window.ShadyCSS = {
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplate(template, elementName, elementExtends) {},

      // eslint-disable-line no-unused-vars

      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       */
      prepareTemplateDom(template, elementName) {},

      // eslint-disable-line no-unused-vars

      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplateStyles(template, elementName, elementExtends) {},

      // eslint-disable-line no-unused-vars

      /**
       * @param {Element} element
       * @param {Object=} properties
       */
      styleSubtree(element, properties) {
        customStyleInterface.processStyles();
        (0, _commonUtils.updateNativeProperties)(element, properties);
      },

      /**
       * @param {Element} element
       */
      styleElement(element) {
        // eslint-disable-line no-unused-vars
        customStyleInterface.processStyles();
      },

      /**
       * @param {Object=} properties
       */
      styleDocument(properties) {
        customStyleInterface.processStyles();
        (0, _commonUtils.updateNativeProperties)(document.body, properties);
      },

      /**
       * @param {Element} element
       * @param {string} property
       * @return {string}
       */
      getComputedStyleValue(element, property) {
        return (0, _commonUtils.getComputedStyleValue)(element, property);
      },

      flushCustomStyles() {},

      nativeCss: _styleSettings.nativeCssVariables,
      nativeShadow: _styleSettings.nativeShadow,
      cssBuild: _styleSettings.cssBuild,
      disableRuntime: _styleSettings.disableRuntime
    };
  }

  window.ShadyCSS.CustomStyleInterface = customStyleInterface;
});