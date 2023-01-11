define(["../node_modules/@polymer/polymer/polymer-element.js"], function (_polymerElement) {
  "use strict";

  class ShopDisclaimer extends _polymerElement.PolymerElement {
    static get template() {
      return _polymerElement.html`
    <style>

      :host {
        display: block;
        margin: 5px auto;
        max-width: 440px;
      }

      div {
        padding: 2px 20px;
        background-color: #fff3cd;
        border: 1px solid #ffdeaa;
      }

    </style>
    <div>
      <p>Welcom to Gezmo Enterprise.</p>
    </div>
    `;
    }

    static get is() {
      return 'shop-disclaimer';
    }

  }

  customElements.define(ShopDisclaimer.is, ShopDisclaimer);
});