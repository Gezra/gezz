define(["../node_modules/@polymer/polymer/polymer-element.js", "./shop-button.js", "./shop-image.js"], function (_polymerElement, _shopButton, _shopImage) {
  "use strict";

  class ShopConfirmation extends _polymerElement.PolymerElement {
    static get template() {
      return _polymerElement.html`
    <style include="shop-common-styles shop-button">

      :host {
        display: block;
        @apply --layout-horizontal;
        @apply --layout-center-justified;
        padding: 0 20px;
      }

      shop-button {
        margin-top: 65px;
      }
    </style>

    <div>
      <h1>Order Received</h1>
      <p>Congratulations, on your purchase. The order has been received and is being processed.</p>
      <shop-button>
        <a href="/">Continue Shopping</a>
      </shop-button>
    </div>
`;
    }

    static get is() {
      return 'shop-confirmation';
    }

    static get properties() {
      return {
        visible: {
          type: Boolean,
          observer: '_visibleChanged'
        }
      };
    }

    _visibleChanged(visible) {
      if (visible) {
        this.dispatchEvent(new CustomEvent('change-section', {
          bubbles: true,
          composed: true,
          detail: {
            title: 'Confirmation'
          }
        }));
      }
    }

  }

  customElements.define(ShopConfirmation.is, ShopConfirmation);
});