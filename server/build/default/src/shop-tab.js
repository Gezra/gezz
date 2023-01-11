define(["../node_assets/@polymer/polymer/polymer-element.js", "../node_assets/@polymer/iron-flex-layout/iron-flex-layout.js", "./shop-ripple-container.js"], function (_polymerElement, _ironFlexLayout, _shopRippleContainer) {
  "use strict";

  class ShopTab extends _polymerElement.PolymerElement {
    static get template() {
      return _polymerElement.html`
    <style>
      [hidden] {
        display: none !important;
      }

      :host {
        display: inline-block;
        position: relative;
      }

      #overlay {
        pointer-events: none;
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        @apply --shop-tab-overlay;
      }

      :host(.shop-tabs-overlay-static-above) #overlay {
        display: block;
      }
    </style>
    <div id="overlay"></div>
    <shop-ripple-container>
      <slot></slot>
    </shop-ripple-container>
    `;
    }

    static get is() {
      return 'shop-tab';
    }

  }

  customElements.define(ShopTab.is, ShopTab);
});