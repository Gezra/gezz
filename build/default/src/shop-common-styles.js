define(["../node_modules/@polymer/polymer/polymer-element.js", "../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"], function (_polymerElement, _ironFlexLayout) {
  "use strict";

  const $_documentContainer = document.createElement('template');
  $_documentContainer.innerHTML = `<dom-module id="shop-common-styles">
  <template>
    <style>

      [hidden] {
        display: none !important;
      }

      header {
        text-align: center;
      }

      header > h1 {
        margin: 0 0 4px 0;
        font-size: 1.3em;
        font-weight: 500;
      }

      header > span {
        color: var(--app-secondary-color);
        font-size: 12px;
      }

      header > shop-button[responsive] {
        margin-top: 20px;
      }

      @media (max-width: 767px) {

        header > h1 {
          font-size: 1.1em;
        }

      }

    </style>
  </template>
</dom-module>`;
  document.head.appendChild($_documentContainer.content);
});