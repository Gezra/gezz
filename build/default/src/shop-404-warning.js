define(["../node_modules/@polymer/polymer/polymer-element.js", "../node_modules/@polymer/iron-icon/iron-icon.js", "./shop-button.js", "./shop-icons.js"], function (_polymerElement, _ironIcon, _shopButton, _shopIcons) {
  "use strict";

  class Shop404Warning extends _polymerElement.PolymerElement {
    static get template() {
      return _polymerElement.html`
    <style include="shop-button">

      :host {
        display: block;
        text-align: center;
        color: var(--app-secondary-color);
      }

      iron-icon {
        display: inline-block;
        width: 60px;
        height: 60px;
      }

      h1 {
        margin: 50px 0 50px 0;
        font-weight: 300;
      }

    </style>

    <div>
      <iron-icon icon="error"></iron-icon>
      <h1>Sorry, we couldn't find that page</h1>
    </div>
    <shop-button>
      <a href="/">Go to the home page</a>
    </shop-button>
`;
    }

    static get is() {
      return 'shop-404-warning';
    }

  }

  customElements.define(Shop404Warning.is, Shop404Warning);
});