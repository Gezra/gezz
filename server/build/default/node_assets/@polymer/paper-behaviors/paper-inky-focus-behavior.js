define(["exports", "../polymer/polymer-legacy.js", "../iron-behaviors/iron-button-state.js", "../iron-behaviors/iron-control-state.js", "./paper-ripple-behavior.js"], function (_exports, _polymerLegacy, _ironButtonState, _ironControlState, _paperRippleBehavior) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PaperInkyFocusBehavior = _exports.PaperInkyFocusBehaviorImpl = void 0;

  /**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
   * focus.
   *
   * @polymerBehavior PaperInkyFocusBehavior
   */
  const PaperInkyFocusBehaviorImpl = {
    observers: ['_focusedChanged(receivedFocusFromKeyboard)'],
    _focusedChanged: function (receivedFocusFromKeyboard) {
      if (receivedFocusFromKeyboard) {
        this.ensureRipple();
      }

      if (this.hasRipple()) {
        this._ripple.holdDown = receivedFocusFromKeyboard;
      }
    },
    _createRipple: function () {
      var ripple = _paperRippleBehavior.PaperRippleBehavior._createRipple();

      ripple.id = 'ink';
      ripple.setAttribute('center', '');
      ripple.classList.add('circle');
      return ripple;
    }
  };
  /** @polymerBehavior */

  _exports.PaperInkyFocusBehaviorImpl = PaperInkyFocusBehaviorImpl;
  const PaperInkyFocusBehavior = [_ironButtonState.IronButtonState, _ironControlState.IronControlState, _paperRippleBehavior.PaperRippleBehavior, PaperInkyFocusBehaviorImpl];
  _exports.PaperInkyFocusBehavior = PaperInkyFocusBehavior;
});