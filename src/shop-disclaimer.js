import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ShopDisclaimer extends PolymerElement {
  static get template() {
    return html`
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

  static get is() { return 'shop-disclaimer'; }

}

customElements.define(ShopDisclaimer.is, ShopDisclaimer);
