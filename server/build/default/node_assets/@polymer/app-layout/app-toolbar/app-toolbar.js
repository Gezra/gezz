define(["../../polymer/polymer-legacy.js", "../../iron-flex-layout/iron-flex-layout.js", "../../polymer/lib/legacy/polymer-fn.js", "../../polymer/lib/utils/html-tag.js"], function (_polymerLegacy, _ironFlexLayout, _polymerFn, _htmlTag) {
  "use strict";

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
  app-toolbar is a horizontal toolbar containing items that can be used for
  label, navigation, search and actions.
  
  ### Example
  
  Add a title to the toolbar.
  
  ```html
  <app-toolbar>
    <div main-title>App name</div>
  </app-toolbar>
  ```
  
  Add a button to the left and right side of the toolbar.
  
  ```html
  <app-toolbar>
    <paper-icon-button icon="menu"></paper-icon-button>
    <div main-title>App name</div>
    <paper-icon-button icon="search"></paper-icon-button>
  </app-toolbar>
  ```
  
  You can use the attributes `top-item` or `bottom-item` to completely fit an
  element to the top or bottom of the toolbar respectively.
  
  ### Content attributes
  
  Attribute            | Description
  ---------------------|---------------------------------------------------------
  `main-title`         | The main title element.
  `condensed-title`    | The title element if used inside a condensed app-header.
  `spacer`             | Adds a left margin of `64px`.
  `bottom-item`        | Sticks the element to the bottom of the toolbar.
  `top-item`           | Sticks the element to the top of the toolbar.
  
  ### Styling
  
  Custom property              | Description                  | Default
  -----------------------------|------------------------------|-----------------------
  `--app-toolbar-font-size`    | Toolbar font size            | 20px
  
  @element app-toolbar
  @demo app-toolbar/demo/index.html
  */
  (0, _polymerFn.Polymer)({
    /** @override */
    _template: _htmlTag.html`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,
    is: 'app-toolbar'
  });
});