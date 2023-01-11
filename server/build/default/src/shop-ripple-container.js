define(["../node_assets/@polymer/polymer/polymer-element.js", "../node_assets/@polymer/paper-behaviors/paper-ripple-behavior.js", "../node_assets/@polymer/polymer/lib/utils/gestures.js", "../node_assets/@polymer/polymer/lib/legacy/class.js"], function (_polymerElement, _paperRippleBehavior, _gestures, _class) {
  "use strict";

  class ShopRippleContainer extends (0, _class.mixinBehaviors)([_paperRippleBehavior.PaperRippleBehavior], _polymerElement.PolymerElement) {
    static get template() {
      return _polymerElement.html`
    <style>
      :host {
        display: inline-block;
        position: relative;
      }

      paper-ripple {
        color: var(--app-accent-color);
      }
    </style>
    <slot></slot>
    `;
    }

    static get is() {
      return 'shop-ripple-container';
    }

    constructor() {
      super();
      this._isDown = false;
    }

    ready() {
      super.ready();
      this.addEventListener('focus', e => this._onFocus(e), true);
      this.addEventListener('blur', e => this._onBlur(e), true);
      (0, _gestures.addListener)(this, 'down', this._rippleDown);
      (0, _gestures.addListener)(this, 'up', this._rippleUp);
    }

    _onFocus(event) {
      // Prevent second ripple when clicking causes both focus and down.
      if (!this._isDown) {
        this._rippleDown(event);
      }
    }

    _onBlur(event) {
      this._rippleUp(event);
    }

    _rippleDown(event) {
      this._isDown = true;
      this.getRipple().downAction(event);
    }

    _rippleUp(event) {
      this._isDown = false;
      this.getRipple().upAction(event);
    }

  }

  customElements.define(ShopRippleContainer.is, ShopRippleContainer);
});