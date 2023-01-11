define(["../node_assets/@polymer/polymer/polymer-element.js", "../node_assets/@polymer/iron-flex-layout/iron-flex-layout.js", "../node_assets/@polymer/iron-selector/iron-selectable.js", "./shop-tabs-overlay.js", "../node_assets/@polymer/polymer/lib/legacy/class.js"], function (_polymerElement, _ironFlexLayout, _ironSelectable, _shopTabsOverlay, _class) {
  "use strict";

  class ShopTabs extends (0, _class.mixinBehaviors)([_ironSelectable.IronSelectableBehavior], _polymerElement.PolymerElement) {
    static get template() {
      return _polymerElement.html`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center-center;
      }

      #container {
        position: relative;
      }

      shop-tabs-overlay {
        @apply --shop-tab-overlay;
      }
    </style>
    <div id="container">
      <shop-tabs-overlay id="overlay"></shop-tabs-overlay>
      <slot></slot>
    </div>
    `;
    }

    static get is() {
      return 'shop-tabs';
    }

    static get observers() {
      return ['_onSelectedItemChanged(selectedItem)'];
    }

    _onSelectedItemChanged(selectedItem) {
      if (selectedItem === undefined && this.selected) return;
      this.$.overlay.target = selectedItem;
    }

  }

  customElements.define(ShopTabs.is, ShopTabs);
});