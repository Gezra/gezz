define(["../node_modules/@polymer/polymer/polymer-element.js", "../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"], function (_polymerElement, _ironFlexLayout) {
  "use strict";

  const $_documentContainer = document.createElement('template');
  $_documentContainer.innerHTML = `<dom-module id="shop-form-styles">
  <template>
    <style>

      :host {
        display: block;
      }

      .main-frame {
        margin: 0 auto;
        padding: 0 24px 48px 24px;
        max-width: 900px;
        overflow: hidden;
      }

      .subsection:not([visible]) {
        display: none;
      }

      .empty-cart {
        text-align: center;
        white-space: nowrap;
        color: var(--app-secondary-color);
      }

      h2 {
        font-size: 13px;
      }

    </style>
  </template>
</dom-module>`;
  document.head.appendChild($_documentContainer.content);
});