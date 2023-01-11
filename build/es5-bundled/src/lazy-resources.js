define(["exports","./shop-app.js"],function(_exports,_shopApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0/* ignoreName */ /* skipSlots */});_exports.PaperSpinnerBehavior=_exports.PaperRippleBehavior=_exports.PaperInkyFocusBehaviorImpl=_exports.PaperInkyFocusBehavior=_exports.IronMeta=_exports.IronControlState=_exports.IronButtonStateImpl=_exports.IronButtonState=_exports.AppStorageBehavior=_exports.$paperSpinnerBehavior=_exports.$paperRippleBehavior=_exports.$paperInkyFocusBehavior=_exports.$ironMeta=_exports.$ironControlState=_exports.$ironButtonState=_exports.$appStorageBehavior=void 0;function _templateObject16_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-select\">\n\n      :host {\n        @apply --layout-horizontal;\n        position: relative;\n        margin-bottom: 24px;\n      }\n\n      shop-image {\n        width: 72px;\n        height: 72px;\n      }\n\n      shop-select > select {\n        font-size: 16px;\n        padding-left: 40px;\n      }\n\n      shop-select > shop-md-decorator {\n        font-size: 12px;\n        border: none;\n      }\n\n      .name {\n        @apply --layout-flex-auto;\n        line-height: 20px;\n        font-weight: 500;\n        float: left;\n        width: calc(100% - 438px);\n        margin-top: 26px;\n        margin-right: 30px;\n      }\n\n      .name a {\n        display: inline-block;\n        max-width: 100%;\n        text-decoration: none;\n        color: var(--app-primary-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .price, .size {\n        display: inline-block;\n        white-space: nowrap;\n        color: var(--app-secondary-color);\n      }\n\n      .size {\n        min-width: 70px;\n        width: 144px;\n      }\n\n      .size > span {\n        margin-left: 10px;\n      }\n\n      .price {\n        min-width: 70px;\n        width: 100px;\n      }\n\n      .quantity {\n        min-width: 80px;\n        width: 160px;\n      }\n\n      .delete-button {\n        width: 34px;\n        height: 34px;\n        color: var(--app-secondary-color);\n        position: absolute;\n        top: 18px;\n        right: 0;\n      }\n\n      .flex {\n        @apply --layout-horizontal;\n        @apply --layout-flex-auto;\n        margin-left: 24px;\n      }\n\n      .detail {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        margin-top: 26px;\n        margin-right: 30px;\n        height: 20px;\n      }\n\n      @media (max-width: 767px) {\n        .flex {\n          @apply --layout-vertical;\n          margin-left: 10px;\n        }\n\n        .name {\n          margin-top: 16px;\n          margin-right: 0;\n          width: calc(100% - 40px);\n        }\n\n        .detail {\n          @apply --layout-self-end;\n          margin: 10px 10px 0 0;\n        }\n\n        .quantity, .size, .price {\n          text-align: right;\n          width: auto;\n        }\n\n        .delete-button {\n          top: 8px;\n        }\n      }\n\n      @media (max-width: 360px) {\n        .name {\n          margin-top: 0;\n        }\n\n        .detail {\n          @apply --layout-vertical;\n          @apply --layout-start;\n          @apply --layout-self-start;\n          height: auto;\n          margin-top: 0;\n        }\n\n        .delete-button {\n          top: -6px;\n        }\n\n        shop-select > select {\n          padding: 2px 24px 2px 40px;\n        }\n\n        .quantity, .size, .price {\n          text-align: left;\n          width: auto;\n        }\n      }\n\n    </style>\n\n    <a href$=\"/detail/[[entry.item.category]]/[[entry.item.name]]\" title$=\"[[entry.item.title]]\">\n      <shop-image src=\"[[entry.item.image]]\" alt=\"[[entry.item.title]]\"></shop-image>\n    </a>\n    <div class=\"flex\">\n      <div class=\"name\">\n        <a href$=\"/detail/[[entry.item.category]]/[[entry.item.name]]\">[[entry.item.title]]</a>\n      </div>\n      <div class=\"detail\">\n        <div class=\"quantity\">\n          <shop-select>\n            <label prefix=\"\">Qty:</label>\n            <select id=\"quantitySelect\" aria-label=\"Change quantity\" value=\"[[entry.quantity]]\" on-change=\"_quantityChange\">\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n              <option value=\"11\">11</option>\n              <option value=\"12\">12</option>\n            </select>\n            <shop-md-decorator aria-hidden=\"true\"></shop-md-decorator>\n          </shop-select>\n        </div>\n        <div class=\"size\">Size: <span>[[entry.size]]</span></div>\n        <div class=\"price\">[[_formatPrice(entry.item.price)]]</div>\n\n        <!--\n          Use on-click instead of on-tap to prevent the next cart item to be focused\n        -->\n        <paper-icon-button class=\"delete-button\" icon=\"close\" aria-label$=\"Delete item [[entry.item.title]]\" on-click=\"_removeItem\"></paper-icon-button>\n      </div>\n    </div>\n    "],["\n    <style include=\"shop-select\">\n\n      :host {\n        @apply --layout-horizontal;\n        position: relative;\n        margin-bottom: 24px;\n      }\n\n      shop-image {\n        width: 72px;\n        height: 72px;\n      }\n\n      shop-select > select {\n        font-size: 16px;\n        padding-left: 40px;\n      }\n\n      shop-select > shop-md-decorator {\n        font-size: 12px;\n        border: none;\n      }\n\n      .name {\n        @apply --layout-flex-auto;\n        line-height: 20px;\n        font-weight: 500;\n        float: left;\n        width: calc(100% - 438px);\n        margin-top: 26px;\n        margin-right: 30px;\n      }\n\n      .name a {\n        display: inline-block;\n        max-width: 100%;\n        text-decoration: none;\n        color: var(--app-primary-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .price, .size {\n        display: inline-block;\n        white-space: nowrap;\n        color: var(--app-secondary-color);\n      }\n\n      .size {\n        min-width: 70px;\n        width: 144px;\n      }\n\n      .size > span {\n        margin-left: 10px;\n      }\n\n      .price {\n        min-width: 70px;\n        width: 100px;\n      }\n\n      .quantity {\n        min-width: 80px;\n        width: 160px;\n      }\n\n      .delete-button {\n        width: 34px;\n        height: 34px;\n        color: var(--app-secondary-color);\n        position: absolute;\n        top: 18px;\n        right: 0;\n      }\n\n      .flex {\n        @apply --layout-horizontal;\n        @apply --layout-flex-auto;\n        margin-left: 24px;\n      }\n\n      .detail {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        margin-top: 26px;\n        margin-right: 30px;\n        height: 20px;\n      }\n\n      @media (max-width: 767px) {\n        .flex {\n          @apply --layout-vertical;\n          margin-left: 10px;\n        }\n\n        .name {\n          margin-top: 16px;\n          margin-right: 0;\n          width: calc(100% - 40px);\n        }\n\n        .detail {\n          @apply --layout-self-end;\n          margin: 10px 10px 0 0;\n        }\n\n        .quantity, .size, .price {\n          text-align: right;\n          width: auto;\n        }\n\n        .delete-button {\n          top: 8px;\n        }\n      }\n\n      @media (max-width: 360px) {\n        .name {\n          margin-top: 0;\n        }\n\n        .detail {\n          @apply --layout-vertical;\n          @apply --layout-start;\n          @apply --layout-self-start;\n          height: auto;\n          margin-top: 0;\n        }\n\n        .delete-button {\n          top: -6px;\n        }\n\n        shop-select > select {\n          padding: 2px 24px 2px 40px;\n        }\n\n        .quantity, .size, .price {\n          text-align: left;\n          width: auto;\n        }\n      }\n\n    </style>\n\n    <a href\\$=\"/detail/[[entry.item.category]]/[[entry.item.name]]\" title\\$=\"[[entry.item.title]]\">\n      <shop-image src=\"[[entry.item.image]]\" alt=\"[[entry.item.title]]\"></shop-image>\n    </a>\n    <div class=\"flex\">\n      <div class=\"name\">\n        <a href\\$=\"/detail/[[entry.item.category]]/[[entry.item.name]]\">[[entry.item.title]]</a>\n      </div>\n      <div class=\"detail\">\n        <div class=\"quantity\">\n          <shop-select>\n            <label prefix=\"\">Qty:</label>\n            <select id=\"quantitySelect\" aria-label=\"Change quantity\" value=\"[[entry.quantity]]\" on-change=\"_quantityChange\">\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n              <option value=\"11\">11</option>\n              <option value=\"12\">12</option>\n            </select>\n            <shop-md-decorator aria-hidden=\"true\"></shop-md-decorator>\n          </shop-select>\n        </div>\n        <div class=\"size\">Size: <span>[[entry.size]]</span></div>\n        <div class=\"price\">[[_formatPrice(entry.item.price)]]</div>\n\n        <!--\n          Use on-click instead of on-tap to prevent the next cart item to be focused\n        -->\n        <paper-icon-button class=\"delete-button\" icon=\"close\" aria-label\\$=\"Delete item [[entry.item.title]]\" on-click=\"_removeItem\"></paper-icon-button>\n      </div>\n    </div>\n    "]);_templateObject16_04d6a060917111eda86f7317648a0965=function _templateObject16_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject15_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-button\">\n\n      :host {\n        display: block;\n        text-align: center;\n        color: var(--app-secondary-color);\n      }\n\n      iron-icon {\n        display: inline-block;\n        width: 60px;\n        height: 60px;\n      }\n\n      h1 {\n        margin: 50px 0 50px 0;\n        font-weight: 300;\n      }\n\n    </style>\n\n    <div>\n      <iron-icon icon=\"error\"></iron-icon>\n      <h1>Sorry, we couldn't find that page</h1>\n    </div>\n    <shop-button>\n      <a href=\"/\">Go to the home page</a>\n    </shop-button>\n"]);_templateObject15_04d6a060917111eda86f7317648a0965=function _templateObject15_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject14_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-button\">\n\n      :host {\n        display: block;\n        padding: 40px 20px;\n        text-align: center;\n        color: var(--app-secondary-color);\n      }\n\n      iron-icon {\n        display: inline-block;\n        width: 30px;\n        height: 30px;\n      }\n\n      h1 {\n        margin: 50px 0 10px 0;\n        font-weight: 300;\n      }\n\n      p {\n        margin: 0;\n      }\n\n      shop-button {\n        margin-top: 50px;\n      }\n\n    </style>\n\n    <div hidden$=\"[[offline]]\">\n      <h1>Couldn't reach the server</h1>\n    </div>\n    <div hidden$=\"[[!offline]]\">\n      <iron-icon icon=\"perm-scan-wifi\"></iron-icon>\n      <h1>No internet connection</h1>\n      <p>Check if your device is connected to a mobile network or WiFi.</p>\n    </div>\n    <shop-button>\n      <button on-click=\"_tryReconnect\">Try Again</button>\n    </shop-button>\n"],["\n    <style include=\"shop-button\">\n\n      :host {\n        display: block;\n        padding: 40px 20px;\n        text-align: center;\n        color: var(--app-secondary-color);\n      }\n\n      iron-icon {\n        display: inline-block;\n        width: 30px;\n        height: 30px;\n      }\n\n      h1 {\n        margin: 50px 0 10px 0;\n        font-weight: 300;\n      }\n\n      p {\n        margin: 0;\n      }\n\n      shop-button {\n        margin-top: 50px;\n      }\n\n    </style>\n\n    <div hidden\\$=\"[[offline]]\">\n      <h1>Couldn't reach the server</h1>\n    </div>\n    <div hidden\\$=\"[[!offline]]\">\n      <iron-icon icon=\"perm-scan-wifi\"></iron-icon>\n      <h1>No internet connection</h1>\n      <p>Check if your device is connected to a mobile network or WiFi.</p>\n    </div>\n    <shop-button>\n      <button on-click=\"_tryReconnect\">Try Again</button>\n    </shop-button>\n"]);_templateObject14_04d6a060917111eda86f7317648a0965=function _templateObject14_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject13_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      [hidden] {\n        display: none !important;\n      }\n\n      :host {\n        display: inline-block;\n        position: relative;\n      }\n\n      #overlay {\n        pointer-events: none;\n        display: none;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        @apply --shop-tab-overlay;\n      }\n\n      :host(.shop-tabs-overlay-static-above) #overlay {\n        display: block;\n      }\n    </style>\n    <div id=\"overlay\"></div>\n    <shop-ripple-container>\n      <slot></slot>\n    </shop-ripple-container>\n    "]);_templateObject13_04d6a060917111eda86f7317648a0965=function _templateObject13_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject12_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n      }\n\n      paper-ripple {\n        color: var(--app-accent-color);\n      }\n    </style>\n    <slot></slot>\n    "]);_templateObject12_04d6a060917111eda86f7317648a0965=function _templateObject12_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject11_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center-center;\n      }\n\n      #container {\n        position: relative;\n      }\n\n      shop-tabs-overlay {\n        @apply --shop-tab-overlay;\n      }\n    </style>\n    <div id=\"container\">\n      <shop-tabs-overlay id=\"overlay\"></shop-tabs-overlay>\n      <slot></slot>\n    </div>\n    "]);_templateObject11_04d6a060917111eda86f7317648a0965=function _templateObject11_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject10_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: absolute;\n        display: none;\n        pointer-events: none;\n        opacity: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        transition-property: top, right, bottom, left, opacity;\n      }\n    </style>\n    "]);_templateObject10_04d6a060917111eda86f7317648a0965=function _templateObject10_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject9_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: fixed;\n        left: calc(50% - 160px);\n        right: calc(50% - 160px);\n        bottom: 0;\n        background-color: var(--app-primary-color);\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n        color: white;\n        width: 320px;\n        padding: 12px;\n        visibility: hidden;\n        text-align: center;\n        will-change: transform;\n        -webkit-transform: translate3d(0, 100%, 0);\n        transform: translate3d(0, 100%, 0);\n        transition-property: visibility, -webkit-transform, opacity;\n        transition-property: visibility, transform, opacity;\n        transition-duration: 0.2s;\n      }\n      :host(.opened) {\n        visibility: visible;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n      @media (max-width: 767px) {\n        :host {\n          top: auto;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          width: auto;\n          -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n          z-index: 1;\n        }\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject9_04d6a060917111eda86f7317648a0965=function _templateObject9_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject8_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-button\">\n\n      :host {\n        display: block;\n        position: fixed;\n        background-color: #FFF;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n        width: 320px;\n        padding: 12px;\n        visibility: hidden;\n        will-change: transform;\n        top: 56px;\n        right: 16px;\n        -webkit-transform: translate3d(calc(100% + 16px), 0, 0);\n        transform: translate3d(calc(100% + 16px), 0, 0);\n        transition-property: visibility, -webkit-transform;\n        transition-property: visibility, transform;\n        transition-duration: 0.2s;\n        transition-delay: 0.1s;\n      }\n\n      :host(.opened) {\n        visibility: visible;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      .layout-horizontal {\n        @apply --layout-horizontal;\n      }\n\n      .label {\n        @apply --layout-flex;\n        line-height: 24px;\n        margin: 8px;\n      }\n\n      .modal-button {\n        @apply --layout-flex;\n        margin: 16px 8px;\n      }\n\n      .modal-button > a {\n        box-sizing: border-box;\n        width: 100%;\n        padding: 8px 24px;\n      }\n\n      #closeBtn {\n        position: absolute;\n        right: 5px;\n        top: 5px;\n      }\n\n      @media (max-width: 767px) {\n\n        :host {\n          top: auto;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          width: auto;\n          -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n        }\n\n      }\n\n    </style>\n\n    <div class=\"layout-horizontal\">\n      <div class=\"label\">Added to cart</div>\n    </div>\n    <div class=\"layout-horizontal\">\n      <shop-button class=\"modal-button\">\n        <a href=\"/cart\" on-click=\"close\" id=\"viewCartAnchor\">View Cart</a>\n      </shop-button>\n      <shop-button class=\"modal-button\">\n        <a href=\"/checkout\" on-click=\"close\">Checkout</a>\n      </shop-button>\n    </div>\n\n    <paper-icon-button icon=\"close\" id=\"closeBtn\" aria-label=\"Close dialog\" on-click=\"close\"></paper-icon-button>\n"]);_templateObject8_04d6a060917111eda86f7317648a0965=function _templateObject8_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject7_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <app-localstorage-document key=\"shop-cart-data\" data=\"{{cart}}\"></app-localstorage-document>\n"]);_templateObject7_04d6a060917111eda86f7317648a0965=function _templateObject7_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject6_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n"]);_templateObject6_04d6a060917111eda86f7317648a0965=function _templateObject6_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject5_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be `transparent`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id=\"icon\" src=\"[[src]]\" icon=\"[[icon]]\"\n               alt$=\"[[alt]]\"></iron-icon>\n  "],["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be \\`transparent\\`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id=\"icon\" src=\"[[src]]\" icon=\"[[icon]]\"\n               alt$=\"[[alt]]\"></iron-icon>\n  "]);_templateObject5_04d6a060917111eda86f7317648a0965=function _templateObject5_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject4_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler \"interrupts\" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id=\"background\"></div>\n    <div id=\"waves\"></div>\n"]);_templateObject4_04d6a060917111eda86f7317648a0965=function _templateObject4_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject3_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"]);_templateObject3_04d6a060917111eda86f7317648a0965=function _templateObject3_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject2_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <!-- This form is used to collect the elements that should be submitted -->\n    <slot></slot>\n\n    <!-- This form is used for submission -->\n    <form id=\"helper\" action$=\"[[action]]\" method$=\"[[method]]\" enctype$=\"[[enctype]]\"></form>\n"],["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <!-- This form is used to collect the elements that should be submitted -->\n    <slot></slot>\n\n    <!-- This form is used for submission -->\n    <form id=\"helper\" action\\$=\"[[action]]\" method\\$=\"[[method]]\" enctype\\$=\"[[enctype]]\"></form>\n"]);_templateObject2_04d6a060917111eda86f7317648a0965=function _templateObject2_04d6a060917111eda86f7317648a0965(){return data};return data}function _templateObject_04d6a060917111eda86f7317648a0965(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: var(--app-drawer-content-padding, 120px 0);\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened$=\"[[opened]]\" persistent$=\"[[persistent]]\" position$=\"[[position]]\" swipe-open$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: var(--app-drawer-content-padding, 120px 0);\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened\\$=\"[[opened]]\" persistent\\$=\"[[persistent]]\" position\\$=\"[[position]]\" swipe-open\\$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"]);_templateObject_04d6a060917111eda86f7317648a0965=function _templateObject_04d6a060917111eda86f7317648a0965(){return data};return data}(0,_shopApp.Polymer)({/** @override */_template:(0,_shopApp.html$1)(_templateObject_04d6a060917111eda86f7317648a0965()),is:"app-drawer",properties:{/**
     * The opened state of the drawer.
     */opened:{type:Boolean,value:/* ignoreName */!1/* skipSlots */ /* skipSlots */,notify:!0,reflectToAttribute:!0},/**
     * The drawer does not have a scrim and cannot be swiped close.
     */persistent:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * The transition duration of the drawer in milliseconds.
     */transitionDuration:{type:Number,value:200},/**
     * The alignment of the drawer on the screen ('left', 'right', 'start' or
     * 'end'). 'start' computes to left and 'end' to right in LTR layout and
     * vice versa in RTL layout.
     */align:{type:String,value:"left"},/**
     * The computed, read-only position of the drawer on the screen ('left' or
     * 'right').
     */position:{type:String,readOnly:!0,reflectToAttribute:!0},/**
     * Create an area at the edge of the screen to swipe open the drawer.
     */swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * Trap keyboard focus when the drawer is opened and not persistent.
     */noFocusTrap:{type:Boolean,value:!1},/**
     * Disables swiping on the drawer.
     */disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,/** @override */attached:function attached(){(0,_shopApp.afterNextRender)(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this);this.addEventListener("keydown",this._tabKeydownHandler.bind(this));// Only listen for horizontal track so you can vertically scroll
// inside the drawer.
this.listen(this,"track","_track");this.setScrollDirection("y")});this.fire("app-reset-layout")},/** @override */detached:function detached(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},/**
   * Opens the drawer.
   */open:function open(){this.opened=!0},/**
   * Closes the drawer.
   */close:function close(){this.opened=!1},/**
   * Toggles the drawer open and close.
   */toggle:function toggle(){this.opened=!this.opened},/**
   * Gets the width of the drawer.
   *
   * @return {number} The width of the drawer in pixels.
   */getWidth:function getWidth(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function _resetPosition(){switch(this.align){case"start":this._setPosition(this._isRTL()?"right":"left");return;case"end":this._setPosition(this._isRTL()?"left":"right");return;}this._setPosition(this.align)},_escKeydownHandler:function _escKeydownHandler(event){var ESC_KEYCODE=27;if(event.keyCode===ESC_KEYCODE){// Prevent any side effects if app-drawer closes.
event.preventDefault();this.close()}},_track:function _track(event){if(this.persistent||this.disableSwipe){return}// Disable user selection on desktop.
event.preventDefault();switch(event.detail.state){case"start":this._trackStart(event);break;case"track":this._trackMove(event);break;case"end":this._trackEnd(event);break;}},_trackStart:function _trackStart(event){this._drawerState=this._DRAWER_STATE.TRACKING;var rect=this.$.contentContainer.getBoundingClientRect();this._savedWidth=rect.width;if("left"===this.position){this._translateOffset=rect.left}else{this._translateOffset=rect.right-window.innerWidth}this._trackDetails=[];// Disable transitions since style attributes will reflect user track
// events.
this._styleTransitionDuration(0);this.style.visibility="visible"},_trackMove:function _trackMove(event){this._translateDrawer(event.detail.dx+this._translateOffset);// Use Date.now() since event.timeStamp is inconsistent across browsers
// (e.g. most browsers use milliseconds but FF 44 uses microseconds).
this._trackDetails.push({dx:event.detail.dx,timeStamp:Date.now()})},_trackEnd:function _trackEnd(event){var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isInEndState=isPositionLeft?0<=x||x<=-drawerWidth:0>=x||x>=drawerWidth;if(!isInEndState){// No longer need the track events after this method returns - allow them
// to be GC'd.
var trackDetails=this._trackDetails;this._trackDetails=null;this._flingDrawer(event,trackDetails);if(this._drawerState===this._DRAWER_STATE.FLINGING){return}}// If the drawer is not flinging, toggle the opened state based on the
// position of the drawer.
var halfWidth=drawerWidth/2;if(event.detail.dx<-halfWidth){this.opened="right"===this.position}else if(event.detail.dx>halfWidth){this.opened="left"===this.position}if(isInEndState){this.debounce("_resetDrawerState",this._resetDrawerState)}else{this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)}this._styleTransitionDuration(this.transitionDuration);this._resetDrawerTranslate();this.style.visibility=""},_calculateVelocity:function _calculateVelocity(event,trackDetails){// Find the oldest track event that is within 100ms using binary search.
var now=Date.now(),timeLowerBound=now-100,trackDetail,min=0,max=trackDetails.length-1;while(min<=max){// Floor of average of min and max.
var mid=min+max>>1,d=trackDetails[mid];if(d.timeStamp>=timeLowerBound){trackDetail=d;max=mid-1}else{min=mid+1}}if(trackDetail){var dx=event.detail.dx-trackDetail.dx,dt=now-trackDetail.timeStamp||1;return dx/dt}return 0},_flingDrawer:function _flingDrawer(event,trackDetails){var velocity=this._calculateVelocity(event,trackDetails);// Do not fling if velocity is not above a threshold.
if(Math.abs(velocity)<this._MIN_FLING_THRESHOLD){return}this._drawerState=this._DRAWER_STATE.FLINGING;var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isVelocityPositive=0<velocity,isClosingLeft=!isVelocityPositive&&isPositionLeft,isClosingRight=isVelocityPositive&&!isPositionLeft,dx;if(isClosingLeft){dx=-(x+drawerWidth)}else if(isClosingRight){dx=drawerWidth-x}else{dx=-x}// Enforce a minimum transition velocity to make the drawer feel snappy.
if(isVelocityPositive){velocity=Math.max(velocity,this._MIN_TRANSITION_VELOCITY);this.opened="left"===this.position}else{velocity=Math.min(velocity,-this._MIN_TRANSITION_VELOCITY);this.opened="right"===this.position}// Calculate the amount of time needed to finish the transition based on the
// initial slope of the timing function.
var t=this._FLING_INITIAL_SLOPE*dx/velocity;this._styleTransitionDuration(t);this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);this._resetDrawerTranslate();this.debounce("_resetDrawerState",this._resetDrawerState,t)},_styleTransitionDuration:function _styleTransitionDuration(duration){this.style.transitionDuration=duration+"ms";this.$.contentContainer.style.transitionDuration=duration+"ms";this.$.scrim.style.transitionDuration=duration+"ms"},_styleTransitionTimingFunction:function _styleTransitionTimingFunction(timingFunction){this.$.contentContainer.style.transitionTimingFunction=timingFunction;this.$.scrim.style.transitionTimingFunction=timingFunction},_translateDrawer:function _translateDrawer(x){var drawerWidth=this.getWidth();if("left"===this.position){x=Math.max(-drawerWidth,Math.min(x,0));this.$.scrim.style.opacity=1+x/drawerWidth}else{x=Math.max(0,Math.min(x,drawerWidth));this.$.scrim.style.opacity=1-x/drawerWidth}this.translate3d(x+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function _resetDrawerTranslate(){this.$.scrim.style.opacity="";this.transform("",this.$.contentContainer)},_resetDrawerState:function _resetDrawerState(){var oldState=this._drawerState;// If the drawer was flinging, we need to reset the style attributes.
if(oldState===this._DRAWER_STATE.FLINGING){this._styleTransitionDuration(this.transitionDuration);this._styleTransitionTimingFunction("");this.style.visibility=""}this._savedWidth=null;if(this.opened){this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED}else{this._drawerState=this._DRAWER_STATE.CLOSED}if(oldState!==this._drawerState){if(this._drawerState===this._DRAWER_STATE.OPENED){this._setKeyboardFocusTrap();document.addEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow="hidden"}else{document.removeEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow=""}// Don't fire the event on initial load.
if(oldState!==this._DRAWER_STATE.INIT){this.fire("app-drawer-transitioned")}}},/**
   * Resets the layout.
   *
   * @method resetLayout
   */resetLayout:function resetLayout(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function _setKeyboardFocusTrap(){if(this.noFocusTrap){return}// NOTE: Unless we use /deep/ (which we shouldn't since it's deprecated),
// this will not select focusable elements inside shadow roots.
var focusableElementsSelector=["a[href]:not([tabindex=\"-1\"])","area[href]:not([tabindex=\"-1\"])","input:not([disabled]):not([tabindex=\"-1\"])","select:not([disabled]):not([tabindex=\"-1\"])","textarea:not([disabled]):not([tabindex=\"-1\"])","button:not([disabled]):not([tabindex=\"-1\"])","iframe:not([tabindex=\"-1\"])","[tabindex]:not([tabindex=\"-1\"])","[contentEditable=true]:not([tabindex=\"-1\"])"].join(","),focusableElements=(0,_shopApp.dom)(this).querySelectorAll(focusableElementsSelector);if(0<focusableElements.length){this._firstTabStop=focusableElements[0];this._lastTabStop=focusableElements[focusableElements.length-1]}else{// Reset saved tab stops when there are no focusable elements in the
// drawer.
this._firstTabStop=null;this._lastTabStop=null}// Focus on app-drawer if it has non-zero tabindex. Otherwise, focus the
// first focusable element in the drawer, if it exists. Use the tabindex
// attribute since the this.tabIndex property in IE/Edge returns 0 (instead
// of -1) when the attribute is not set.
var tabindex=this.getAttribute("tabindex");if(tabindex&&-1<parseInt(tabindex,10)){this.focus()}else if(this._firstTabStop){this._firstTabStop.focus()}},_tabKeydownHandler:function _tabKeydownHandler(event){if(this.noFocusTrap){return}var TAB_KEYCODE=9;if(this._drawerState===this._DRAWER_STATE.OPENED&&event.keyCode===TAB_KEYCODE){if(event.shiftKey){if(this._firstTabStop&&(0,_shopApp.dom)(event).localTarget===this._firstTabStop){event.preventDefault();this._lastTabStop.focus()}}else{if(this._lastTabStop&&(0,_shopApp.dom)(event).localTarget===this._lastTabStop){event.preventDefault();this._firstTabStop.focus()}}}},_openedPersistentChanged:function _openedPersistentChanged(opened,persistent){this.toggleClass("visible",opened&&!persistent,this.$.scrim);// Use a debounce timer instead of transitionend since transitionend won't
// fire when app-drawer is display: none.
this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5/**
                 * Fired when the layout of app-drawer has changed.
                 *
                 * @event app-reset-layout
                 */ /**
                     * Fired when app-drawer has finished transitioning.
                     *
                     * @event app-drawer-transitioned
                     */}});var SPLICES_RX=/\.splices$/,LENGTH_RX=/\.length$/,NUMBER_RX=/\.?#?([0-9]+)$/,AppStorageBehavior={properties:{/**
     * The data to synchronize.
     */data:{type:Object,notify:!0,value:function value(){return this.zeroValue}},/**
     * If this is true transactions will happen one after the other,
     * never in parallel.
     *
     * Specifically, no transaction will begin until every previously
     * enqueued transaction by this element has completed.
     *
     * If it is false, new transactions will be executed as they are
     * received.
     */sequentialTransactions:{type:Boolean,value:!1},/**
     * When true, will perform detailed logging.
     */log:{type:Boolean,value:!1}},observers:["__dataChanged(data.*)"],/** @override */created:function created(){this.__initialized=!1;this.__syncingToMemory=!1;this.__initializingStoredValue=null;this.__transactionQueueAdvances=Promise.resolve()},/** @override */ready:function ready(){this._initializeStoredValue()},/**
   * Override this getter to return true if the value has never been
   * persisted to storage.
   *
   * @return {boolean}
   */get isNew(){return!0},/**
   * A promise that will resolve once all queued transactions
   * have completed.
   *
   * This field is updated as new transactions are enqueued, so it will
   * only wait for transactions which were enqueued when the field
   * was accessed.
   *
   * This promise never rejects.
   *
   * @return {Promise}
   */get transactionsComplete(){return this.__transactionQueueAdvances},/**
   * Override this getter to define the default value to use when
   * there's no data stored.
   *
   * @return {*}
   */get zeroValue(){return void 0},/**
   * Override this method.
   *
   * If the data value represented by this storage instance is new, this
   * method generates an attempt to write the value to storage.
   *
   *
   * @param {*} args
   * @return {Promise} a Promise that settles only once the write has.
   */saveValue:function saveValue(args){return Promise.resolve()},/**
   * Optional. Override this method to clear out the mapping of this
   * storage object and a logical location within storage.
   *
   * If this method is supported, after it's called, isNew() should be
   * true.
   */reset:function reset(){},/**
   * Remove the data from storage.
   *
   * @return {Promise} A promise that settles once the destruction is
   *   complete.
   */destroy:function destroy(){this.data=this.zeroValue;return this.saveValue()},/**
   * Perform the initial sync between storage and memory. This method
   * is called automatically while the element is being initialized.
   * Implementations may override it.
   *
   * If an implementation intends to call this method, it should instead
   * call _initializeStoredValue, which provides reentrancy protection.
   *
   * @return {Promise} A promise that settles once this process is
   *     complete.
   */initializeStoredValue:function initializeStoredValue(){if(this.isNew){return Promise.resolve()}// If this is not a "new" model, then we should attempt
// to read an initial value from storage:
return this._getStoredValue("data").then(function(data){this._log("Got stored value!",data,this.data);if(null==data){return this._setStoredValue("data",this.data||this.zeroValue)}else{this.syncToMemory(function(){this.set("data",data)})}}.bind(this))},/**
   * Override this method to implement reading a value from storage.
   *
   *
   * @param {string} storagePath The path (through storage) of the value to
   *   create, relative to the root of storage associated with this instance.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. _If there is no
   *   such value at the provided path through storage, then the promise will
   *   resolve to `undefined`._ The promise will be rejected if the transaction
   *   fails for any reason.
   */getStoredValue:function getStoredValue(storagePath){return Promise.resolve()},/**
   * Override this method to implement creating and updating
   * stored values.
   *
   *
   * @param {string} storagePath The path of the value to update, relative
   *   to the root storage path configured for this instance.
   * @param {*} value The updated in-memory value to apply to the stored value
   *   at the provided path.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. The promise
   *   will be rejected if the transaction fails for any reason.
   */setStoredValue:function setStoredValue(storagePath,value){return Promise.resolve(value)},/**
   * Maps a Polymer databinding path to the corresponding path in the
   * storage system. Override to define a custom mapping.
   *
   * The inverse of storagePathToMemoryPath.
   *
   * @param {string} path An in-memory path through a storage object.
   * @return {string} The provided path mapped to the equivalent location in
   *   storage. This mapped version of the path is suitable for use with the
   *   CRUD operations on both memory and storage.
   */memoryPathToStoragePath:function memoryPathToStoragePath(path){return path},/**
   * Maps a storage path to the corresponding Polymer databinding path.
   * Override to define a custom mapping.
   *
   * The inverse of memoryPathToStoragePath.
   *
   * @param {string} path The storage path through a storage object.
   * @return {string} The provided path through storage mapped to the
   *   equivalent Polymer path through the in-memory representation of storage.
   */storagePathToMemoryPath:function storagePathToMemoryPath(path){return path},/**
   * Enables performing transformations on the in-memory representation of
   * storage without activating observers that will cause those
   * transformations to be re-applied to the storage backend. This is useful
   * for preventing redundant (or cyclical) application of transformations.
   *
   * @param {Function} operation A function that will perform the desired
   *   transformation. It will be called synchronously, when it is safe to
   *   apply the transformation.
   */syncToMemory:function syncToMemory(operation){if(this.__syncingToMemory){return}this._group("Sync to memory.");this.__syncingToMemory=!0;operation.call(this);this.__syncingToMemory=!1;this._groupEnd("Sync to memory.")},/**
   * A convenience method. Returns true iff value is null, undefined,
   * an empty array, or an object with no keys.
   */valueIsEmpty:function valueIsEmpty(value){if(Array.isArray(value)){return 0===value.length}else if(Object.prototype.isPrototypeOf(value)){return 0===Object.keys(value).length}else{return null==value}},/**
   * Like `getStoredValue` but called with a Polymer path rather than
   * a storage path.
   *
   * @param {string} path The Polymer path to get.
   * @return {Promise} A Promise of the value stored at that path.
   */_getStoredValue:function _getStoredValue(path){return this.getStoredValue(this.memoryPathToStoragePath(path))},/**
   * Like `setStoredValue` but called with a Polymer path rather than
   * a storage path.
   *
   * @param {string} path The Polymer path to update.
   * @param {*} value The updated in-memory value to apply to the stored value
   *   at the provided path.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. The promise
   *   will be rejected if the transaction fails for any reason.
   */_setStoredValue:function _setStoredValue(path,value){return this.setStoredValue(this.memoryPathToStoragePath(path),value)},/**
   * Enqueues the given function in the transaction queue.
   *
   * The transaction queue allows for optional parallelism/sequentiality
   * via the `sequentialTransactions` boolean property, as well as giving
   * the user a convenient way to wait for all pending transactions to
   * finish.
   *
   * The given function may be called immediately or after an arbitrary
   * delay. Its `this` context will be bound to the element.
   *
   * If the transaction performs any asynchronous operations it must
   * return a promise.
   *
   * @param {Function} transaction A function implementing the transaction.
   * @return {Promise} A promise that resolves once the transaction has
   *   finished. This promise will never reject.
   */_enqueueTransaction:function _enqueueTransaction(transaction){if(this.sequentialTransactions){transaction=transaction.bind(this)}else{var result=transaction.call(this);transaction=function transaction(){return result}}return this.__transactionQueueAdvances=this.__transactionQueueAdvances.then(transaction).catch(function(error){this._error("Error performing queued transaction.",error)}.bind(this))},/**
   * A wrapper around `console.log`.
   * @param {...*} args
   * @override
   */_log:function _log(){if(this.log){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}console.log.apply(console,args)}},/**
   * A wrapper around `console.error`.
   * @param {...*} args
   * @override
   */_error:function _error(){if(this.log){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2]}console.error.apply(console,args)}},/**
   * A wrapper around `console.group`.
   * @param {...*} args
   */_group:function _group(){if(this.log){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3]}console.group.apply(console,args)}},/**
   * A wrapper around `console.groupEnd`.
   * @param {...*} args
   */_groupEnd:function _groupEnd(){if(this.log){for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4]}console.groupEnd.apply(console,args)}},/**
   * A reentrancy-save wrapper around `this.initializeStoredValue`.
   * Prefer calling this method over that one.
   *
   * @return {Promise} The result of calling `initializeStoredValue`,
   *   or `undefined` if called while initializing.
   */_initializeStoredValue:function _initializeStoredValue(){if(this.__initializingStoredValue){return null}this._group("Initializing stored value.");var initializingStoredValue=this.__initializingStoredValue=this.initializeStoredValue().then(function(){this.__initialized=!0;this.__initializingStoredValue=null;this._groupEnd("Initializing stored value.")}.bind(this)).catch(function(e){this.__initializingStoredValue=null;this._groupEnd("Initializing stored value.")}.bind(this));return this._enqueueTransaction(function(){return initializingStoredValue})},__dataChanged:function __dataChanged(change){if(this.isNew||this.__syncingToMemory||!this.__initialized||this.__pathCanBeIgnored(change.path)){return}var path=this.__normalizeMemoryPath(change.path),value=change.value,indexSplices=value&&value.indexSplices;this._enqueueTransaction(function(){this._log("Setting",path+":",indexSplices||value);if(indexSplices&&this.__pathIsSplices(path)){path=this.__parentPath(path);value=this.get(path)}return this._setStoredValue(path,value)})},__normalizeMemoryPath:function __normalizeMemoryPath(path){for(var parts=path.split("."),parentPath=[],currentPath=[],normalizedPath=[],index,i=0;i<parts.length;++i){currentPath.push(parts[i]);if(/^#/.test(parts[i])){normalizedPath.push(this.get(parentPath).indexOf(this.get(currentPath)))}else{normalizedPath.push(parts[i])}parentPath.push(parts[i])}return normalizedPath.join(".")},__parentPath:function __parentPath(path){var parentPath=path.split(".");return parentPath.slice(0,parentPath.length-1).join(".")},__pathCanBeIgnored:function __pathCanBeIgnored(path){return LENGTH_RX.test(path)&&Array.isArray(this.get(this.__parentPath(path)))},__pathIsSplices:function __pathIsSplices(path){return SPLICES_RX.test(path)&&Array.isArray(this.get(this.__parentPath(path)))},__pathRefersToArray:function __pathRefersToArray(path){return(SPLICES_RX.test(path)||LENGTH_RX.test(path))&&Array.isArray(this.get(this.__parentPath(path)))},__pathTailToIndex:function __pathTailToIndex(path){var tail=path.split(".").pop();return window.parseInt(tail.replace(NUMBER_RX,"$1"),10)}};_exports.AppStorageBehavior=AppStorageBehavior;var appStorageBehavior={AppStorageBehavior:AppStorageBehavior};_exports.$appStorageBehavior=appStorageBehavior;(0,_shopApp.Polymer)({is:"app-localstorage-document",/** @override */_template:null,behaviors:[AppStorageBehavior],properties:{/**
     * Defines the logical location to store the data.
     *
     * @type{String}
     */key:{type:String,notify:!0},/**
     * If true, the data will automatically be cleared from storage when
     * the page session ends (i.e. when the user has navigated away from
     * the page).
     */sessionOnly:{type:Boolean,value:!1},/**
     * Either `window.localStorage` or `window.sessionStorage`, depending on
     * `this.sessionOnly`.
     */storage:{type:Object,computed:"__computeStorage(sessionOnly)"}},observers:["__storageSourceChanged(storage, key)"],/** @override */attached:function attached(){this.listen(window,"storage","__onStorage");if(this.__isSameOrigin(window.top)){this.listen(window.top,"app-local-storage-changed","__onAppLocalStorageChanged")}},/** @override */detached:function detached(){this.unlisten(window,"storage","__onStorage");if(this.__isSameOrigin(window.top)){this.unlisten(window.top,"app-local-storage-changed","__onAppLocalStorageChanged")}},get isNew(){return!this.key},/**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param {*} key The new key to use.
   * @return {Promise}
   */saveValue:function saveValue(key){try{this.__setStorageValue(/*{@type if (key ty){String}}*/key,this.data)}catch(e){return Promise.reject(e)}this.key=/** @type {String} */key;return Promise.resolve()},reset:function reset(){this.key=null;this.data=/** @type {!Object} */this.zeroValue},destroy:function destroy(){try{this.storage.removeItem(this.key);this.reset()}catch(e){return Promise.reject(e)}return Promise.resolve()},getStoredValue:function getStoredValue(path){var value;if(null!=this.key){try{value=this.__parseValueFromStorage();if(null!=value){value=this.get(path,{data:value})}else{value=void 0}}catch(e){return Promise.reject(e)}}return Promise.resolve(value)},setStoredValue:function setStoredValue(path,value){if(null!=this.key){try{this.__setStorageValue(this.key,this.data)}catch(e){return Promise.reject(e)}if(this.__isSameOrigin(window.top)){this.fire("app-local-storage-changed",this,{node:window.top})}}return Promise.resolve(value)},__computeStorage:function __computeStorage(sessionOnly){return sessionOnly?window.sessionStorage:window.localStorage},__storageSourceChanged:function __storageSourceChanged(storage,key){this._initializeStoredValue()},__onStorage:function __onStorage(event){if(event.key!==this.key||event.storageArea!==this.storage){return}this.syncToMemory(function(){this.set("data",this.__parseValueFromStorage())})},__onAppLocalStorageChanged:function __onAppLocalStorageChanged(event){if(event.detail===this||event.detail.key!==this.key||event.detail.storage!==this.storage){return}this.syncToMemory(function(){this.set("data",event.detail.data)})},__parseValueFromStorage:function __parseValueFromStorage(){try{return JSON.parse(this.storage.getItem(this.key))}catch(e){console.error("Failed to parse value from storage for",this.key)}},__setStorageValue:function __setStorageValue(key,value){if("undefined"===typeof value)value=null;this.storage.setItem(key,JSON.stringify(value))},__isSameOrigin:function __isSameOrigin(windowReference){try{return window.location.host===windowReference.location.host}catch(e){return!1}}});(0,_shopApp.Polymer)({is:"iron-request",hostAttributes:{hidden:!0},properties:{/**
     * A reference to the XMLHttpRequest instance used to generate the
     * network request.
     *
     * @type {XMLHttpRequest}
     */xhr:{type:Object,notify:!0,readOnly:!0,value:function value(){return new XMLHttpRequest}},/**
     * A reference to the parsed response body, if the `xhr` has completely
     * resolved.
     *
     * @type {*}
     * @default null
     */response:{type:Object,notify:!0,readOnly:!0,value:function value(){return null}},/**
     * A reference to the status code, if the `xhr` has completely resolved.
     */status:{type:Number,notify:!0,readOnly:!0,value:0},/**
     * A reference to the status text, if the `xhr` has completely resolved.
     */statusText:{type:String,notify:!0,readOnly:!0,value:""},/**
     * A promise that resolves when the `xhr` response comes back, or rejects
     * if there is an error before the `xhr` completes.
     * The resolve callback is called with the original request as an argument.
     * By default, the reject callback is called with an `Error` as an argument.
     * If `rejectWithRequest` is true, the reject callback is called with an
     * object with two keys: `request`, the original request, and `error`, the
     * error object.
     *
     * @type {Promise}
     */completes:{type:Object,readOnly:!0,notify:!0,value:function value(){return new Promise(function(resolve,reject){this.resolveCompletes=resolve;this.rejectCompletes=reject}.bind(this))}},/**
     * An object that contains progress information emitted by the XHR if
     * available.
     *
     * @default {}
     */progress:{type:Object,notify:!0,readOnly:!0,value:function value(){return{}}},/**
     * Aborted will be true if an abort of the request is attempted.
     */aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},/**
     * Errored will be true if the browser fired an error event from the
     * XHR object (mainly network errors).
     */errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},/**
     * TimedOut will be true if the XHR threw a timeout event.
     */timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},/**
   * Succeeded is true if the request succeeded. The request succeeded if it
   * loaded without error, wasn't aborted, and the status code is ≥ 200, and
   * < 300, or if the status code is 0.
   *
   * The status code 0 is accepted as a success because some schemes - e.g.
   * file:// - don't provide status codes.
   *
   * @return {boolean}
   */get succeeded(){if(this.errored||this.aborted||this.timedOut){return!1}var status=this.xhr.status||0;// Note: if we are using the file:// protocol, the status code will be 0
// for all outcomes (successful or otherwise).
return 0===status||200<=status&&300>status},/**
   * Sends an HTTP request to the server and returns a promise (see the
   * `completes` property for details).
   *
   * The handling of the `body` parameter will vary based on the Content-Type
   * header. See the docs for iron-ajax's `body` property for details.
   *
   * @param {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined),
   *   timeout: (number|undefined),
   *   rejectWithRequest: (boolean|undefined)}} options -
   *   - url The url to which the request is sent.
   *   - method The HTTP method to use, default is GET.
   *   - async By default, all requests are sent asynchronously. To send
   * synchronous requests, set to false.
   *   -  body The content for the request body for POST method.
   *   -  headers HTTP request headers.
   *   -  handleAs The response type. Default is 'text'.
   *   -  withCredentials Whether or not to send credentials on the request.
   * Default is false.
   *   -  timeout - Timeout for request, in milliseconds.
   *   -  rejectWithRequest Set to true to include the request object with
   * promise rejections.
   * @return {Promise}
   */send:function send(options){var xhr=this.xhr;if(0<xhr.readyState){return null}xhr.addEventListener("progress",function(progress){this._setProgress({lengthComputable:progress.lengthComputable,loaded:progress.loaded,total:progress.total});// Webcomponents v1 spec does not fire *-changed events when not connected
this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this));xhr.addEventListener("error",function(error){this._setErrored(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("timeout",function(error){this._setTimedOut(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("abort",function(){this._setAborted(!0);this._updateStatus();var error=new Error("Request aborted."),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));// Called after all of the above.
xhr.addEventListener("loadend",function(){this._updateStatus();this._setResponse(this.parseResponse());if(!this.succeeded){var error=new Error("The request failed with status code: "+this.xhr.status),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response);return}this.resolveCompletes(this)}.bind(this));this.url=options.url;var isXHRAsync=!1!==options.async;xhr.open(options.method||"GET",options.url,isXHRAsync);var acceptType={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[options.handleAs],headers=options.headers||Object.create(null),newHeaders=Object.create(null);for(var key in headers){newHeaders[key.toLowerCase()]=headers[key]}headers=newHeaders;if(acceptType&&!headers.accept){headers.accept=acceptType}Object.keys(headers).forEach(function(requestHeader){if(/[A-Z]/.test(requestHeader)){_shopApp.Base._error("Headers must be lower case, got",requestHeader)}xhr.setRequestHeader(requestHeader,headers[requestHeader])},this);if(isXHRAsync){xhr.timeout=options.timeout;var handleAs=options.handleAs;// If a JSON prefix is present, the responseType must be 'text' or the
// browser won’t be able to parse the response.
if(!!options.jsonPrefix||!handleAs){handleAs="text"}// In IE, `xhr.responseType` is an empty string when the response
// returns. Hence, caching it as `xhr._responseType`.
xhr.responseType=xhr._responseType=handleAs;// Cache the JSON prefix, if it exists.
if(!!options.jsonPrefix){xhr._jsonPrefix=options.jsonPrefix}}xhr.withCredentials=!!options.withCredentials;var body=this._encodeBodyObject(options.body,headers["content-type"]);xhr.send(/**
                 @type {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|
                         null|string|undefined}
               */body);return this.completes},/**
   * Attempts to parse the response body of the XHR. If parsing succeeds,
   * the value returned will be deserialized based on the `responseType`
   * set on the XHR.
   *
   * @return {*} The parsed response,
   * or undefined if there was an empty response or parsing failed.
   */parseResponse:function parseResponse(){var xhr=this.xhr,responseType=xhr.responseType||xhr._responseType,preferResponseText=!this.xhr.responseType,prefixLen=xhr._jsonPrefix&&xhr._jsonPrefix.length||0;try{switch(responseType){case"json":// If the xhr object doesn't have a natural `xhr.responseType`,
// we can assume that the browser hasn't parsed the response for us,
// and so parsing is our responsibility. Likewise if response is
// undefined, as there's no way to encode undefined in JSON.
if(preferResponseText||xhr.response===void 0){// Try to emulate the JSON section of the response body section of
// the spec: https://xhr.spec.whatwg.org/#response-body
// That is to say, we try to parse as JSON, but if anything goes
// wrong return null.
try{return JSON.parse(xhr.responseText)}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.response;case"xml":return xhr.responseXML;case"blob":case"document":case"arraybuffer":return xhr.response;case"text":default:{// If `prefixLen` is set, it implies the response should be parsed
// as JSON once the prefix of length `prefixLen` is stripped from
// it. Emulate the behavior above where null is returned on failure
// to parse.
if(prefixLen){try{return JSON.parse(xhr.responseText.substring(prefixLen))}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.responseText}}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},/**
   * Aborts the request.
   */abort:function abort(){this._setAborted(!0);this.xhr.abort()},/**
   * @param {*} body The given body of the request to try and encode.
   * @param {?string} contentType The given content type, to infer an encoding
   *     from.
   * @return {*} Either the encoded body as a string, if successful,
   *     or the unaltered body object if no encoding could be inferred.
   */_encodeBodyObject:function _encodeBodyObject(body,contentType){if("string"==typeof body){return body;// Already encoded.
}var bodyObj=/** @type {Object} */body;switch(contentType){case"application/json":return JSON.stringify(bodyObj);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(bodyObj);}return body},/**
   * @param {Object} object The object to encode as x-www-form-urlencoded.
   * @return {string} .
   */_wwwFormUrlEncode:function _wwwFormUrlEncode(object){if(!object){return""}var pieces=[];Object.keys(object).forEach(function(key){// TODO(rictic): handle array values here, in a consistent way with
//   iron-ajax params.
pieces.push(this._wwwFormUrlEncodePiece(key)+"="+this._wwwFormUrlEncodePiece(object[key]))},this);return pieces.join("&")},/**
   * @param {*} str A key or value to encode as x-www-form-urlencoded.
   * @return {string} .
   */_wwwFormUrlEncodePiece:function _wwwFormUrlEncodePiece(str){// Spec says to normalize newlines to \r\n and replace %20 spaces with +.
// jQuery does this as well, so this is likely to be widely compatible.
if(null===str||str===void 0||!str.toString){return""}return encodeURIComponent(str.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+")},/**
   * Updates the status code and status text.
   */_updateStatus:function _updateStatus(){this._setStatus(this.xhr.status);this._setStatusText(this.xhr.statusText===void 0?"":this.xhr.statusText)}});(0,_shopApp.Polymer)({is:"iron-ajax",/**
   * Fired before a request is sent.
   *
   * @event iron-ajax-presend
   */ /**
       * Fired when a request is sent.
       *
       * @event request
       */ /**
           * Fired when a request is sent.
           *
           * @event iron-ajax-request
           */ /**
               * Fired when a response is received.
               *
               * @event response
               */ /**
                   * Fired when a response is received.
                   *
                   * @event iron-ajax-response
                   */ /**
                       * Fired when an error is received.
                       *
                       * @event error
                       */ /**
                           * Fired when an error is received.
                           *
                           * @event iron-ajax-error
                           */hostAttributes:{hidden:!0},properties:{/**
     * The URL target of the request.
     */url:{type:String},/**
     * An object that contains query parameters to be appended to the
     * specified `url` when generating a request. If you wish to set the body
     * content when making a POST request, you should use the `body` property
     * instead.
     */params:{type:Object,value:function value(){return{}}},/**
     * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
     * Default is 'GET'.
     */method:{type:String,value:"GET"},/**
     * HTTP request headers to send.
     *
     * Example:
     *
     *     <iron-ajax
     *         auto
     *         url="http://somesite.com"
     *         headers='{"X-Requested-With": "XMLHttpRequest"}'
     *         handle-as="json"></iron-ajax>
     *
     * Note: setting a `Content-Type` header here will override the value
     * specified by the `contentType` property of this element.
     */headers:{type:Object,value:function value(){return{}}},/**
     * Content type to use when sending data. If the `contentType` property
     * is set and a `Content-Type` header is specified in the `headers`
     * property, the `headers` property value will take precedence.
     *
     * Varies the handling of the `body` param.
     */contentType:{type:String,value:null},/**
     * Body content to send with the request, typically used with "POST"
     * requests.
     *
     * If body is a string it will be sent unmodified.
     *
     * If Content-Type is set to a value listed below, then
     * the body will be encoded accordingly.
     *
     *    * `content-type="application/json"`
     *      * body is encoded like `{"foo":"bar baz","x":1}`
     *    * `content-type="application/x-www-form-urlencoded"`
     *      * body is encoded like `foo=bar+baz&x=1`
     *
     * Otherwise the body will be passed to the browser unmodified, and it
     * will handle any encoding (e.g. for FormData, Blob, ArrayBuffer).
     *
     * @type
     * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object)
     */body:{type:Object,value:null},/**
     * Toggle whether XHR is synchronous or asynchronous. Don't change this
     * to true unless You Know What You Are Doing™.
     */sync:{type:Boolean,value:!1},/**
     * Specifies what data to store in the `response` property, and
     * to deliver as `event.detail.response` in `response` events.
     *
     * One of:
     *
     *    `text`: uses `XHR.responseText`.
     *
     *    `xml`: uses `XHR.responseXML`.
     *
     *    `json`: uses `XHR.responseText` parsed as JSON.
     *
     *    `arraybuffer`: uses `XHR.response`.
     *
     *    `blob`: uses `XHR.response`.
     *
     *    `document`: uses `XHR.response`.
     */handleAs:{type:String,value:"json"},/**
     * Set the withCredentials flag on the request.
     */withCredentials:{type:Boolean,value:!1},/**
     * Set the timeout flag on the request.
     */timeout:{type:Number,value:0},/**
     * If true, automatically performs an Ajax request when either `url` or
     * `params` changes.
     */auto:{type:Boolean,value:!1},/**
     * If true, error messages will automatically be logged to the console.
     */verbose:{type:Boolean,value:!1},/**
     * The most recent request made by this iron-ajax element.
     *
     * @type {Object|undefined}
     */lastRequest:{type:Object,notify:!0,readOnly:!0},/**
     * The `progress` property of this element's `lastRequest`.
     *
     * @type {Object|undefined}
     */lastProgress:{type:Object,notify:!0,readOnly:!0},/**
     * True while lastRequest is in flight.
     */loading:{type:Boolean,notify:!0,readOnly:!0},/**
     * lastRequest's response.
     *
     * Note that lastResponse and lastError are set when lastRequest finishes,
     * so if loading is true, then lastResponse and lastError will correspond
     * to the result of the previous request.
     *
     * The type of the response is determined by the value of `handleAs` at
     * the time that the request was generated.
     *
     * @type {Object}
     */lastResponse:{type:Object,notify:!0,readOnly:!0},/**
     * lastRequest's error, if any.
     *
     * @type {Object}
     */lastError:{type:Object,notify:!0,readOnly:!0},/**
     * An Array of all in-flight requests originating from this iron-ajax
     * element.
     */activeRequests:{type:Array,notify:!0,readOnly:!0,value:function value(){return[]}},/**
     * Length of time in milliseconds to debounce multiple automatically
     * generated requests.
     */debounceDuration:{type:Number,value:0,notify:!0},/**
     * Prefix to be stripped from a JSON response before parsing it.
     *
     * In order to prevent an attack using CSRF with Array responses
     * (http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
     * many backends will mitigate this by prefixing all JSON response bodies
     * with a string that would be nonsensical to a JavaScript parser.
     *
     */jsonPrefix:{type:String,value:""},/**
     * By default, iron-ajax's events do not bubble. Setting this attribute will
     * cause its request and response events as well as its iron-ajax-request,
     * -response,  and -error events to bubble to the window object. The vanilla
     * error event never bubbles when using shadow dom even if this.bubbles is
     * true because a scoped flag is not passed with it (first link) and because
     * the shadow dom spec did not used to allow certain events, including
     * events named error, to leak outside of shadow trees (second link).
     * https://www.w3.org/TR/shadow-dom/#scoped-flag
     * https://www.w3.org/TR/2015/WD-shadow-dom-20151215/#events-that-are-not-leaked-into-ancestor-trees
     */bubbles:{type:Boolean,value:!1},/**
     * Changes the [`completes`](iron-request#property-completes) promise chain
     * from `generateRequest` to reject with an object
     * containing the original request, as well an error message.
     * If false (default), the promise rejects with an error message only.
     */rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function value(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, "+"body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function created(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},/**
   * The query string that should be appended to the `url`, serialized from
   * the current value of `params`.
   *
   * @return {string}
   */get queryString(){var queryParts=[],param,value;for(param in this.params){value=this.params[param];param=window.encodeURIComponent(param);if(Array.isArray(value)){for(var i=0;i<value.length;i++){queryParts.push(param+"="+window.encodeURIComponent(value[i]))}}else if(null!==value){queryParts.push(param+"="+window.encodeURIComponent(value))}else{queryParts.push(param)}}return queryParts.join("&")},/**
   * The `url` with query string (if `params` are specified), suitable for
   * providing to an `iron-request` instance.
   *
   * @return {string}
   */get requestUrl(){var queryString=this.queryString,url=this.url||"";if(queryString){var bindingChar=0<=url.indexOf("?")?"&":"?";return url+bindingChar+queryString}return url},/**
   * An object that maps header names to header values, first applying the
   * the value of `Content-Type` and then overlaying the headers specified
   * in the `headers` property.
   *
   * @return {Object}
   */get requestHeaders(){var headers={},contentType=this.contentType;if(null==contentType&&"string"===typeof this.body){contentType="application/x-www-form-urlencoded"}if(contentType){headers["content-type"]=contentType}var header;if("object"===babelHelpers.typeof(this.headers)){for(header in this.headers){headers[header]=this.headers[header].toString()}}return headers},_onProgressChanged:function _onProgressChanged(event){this._setLastProgress(event.detail.value)},/**
   * Request options suitable for generating an `iron-request` instance based
   * on the current state of the `iron-ajax` instance's properties.
   *
   * @return {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined)}}
   */toRequestOptions:function toRequestOptions(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},/**
   * Performs an AJAX request to the specified URL.
   *
   * @return {!IronRequestElement}
   */generateRequest:function generateRequest(){var request=/** @type {!IronRequestElement} */document.createElement("iron-request"),requestOptions=this.toRequestOptions();this.push("activeRequests",request);request.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,request)).then(this._discardRequest.bind(this,request));var evt=this.fire("iron-ajax-presend",{request:request,options:requestOptions},{bubbles:this.bubbles,cancelable:!0});if(evt.defaultPrevented){request.abort();request.rejectCompletes(request);return request}if(this.lastRequest){this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged)}request.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged);request.send(requestOptions);this._setLastProgress(null);this._setLastRequest(request);this._setLoading(!0);this.fire("request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});return request},_handleResponse:function _handleResponse(request){if(request===this.lastRequest){this._setLastResponse(request.response);this._setLastError(null);this._setLoading(!1)}this.fire("response",request,{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-response",request,{bubbles:this.bubbles,composed:!0})},_handleError:function _handleError(request,error){if(this.verbose){_shopApp.Base._error(error)}if(request===this.lastRequest){this._setLastError({request:request,error:error,status:request.xhr.status,statusText:request.xhr.statusText,response:request.xhr.response});this._setLastResponse(null);this._setLoading(!1)}// Tests fail if this goes after the normal this.fire('error', ...)
this.fire("iron-ajax-error",{request:request,error:error},{bubbles:this.bubbles,composed:!0});this.fire("error",{request:request,error:error},{bubbles:this.bubbles,composed:!0})},_discardRequest:function _discardRequest(request){var requestIndex=this.activeRequests.indexOf(request);if(-1<requestIndex){this.splice("activeRequests",requestIndex,1)}},_requestOptionsChanged:function _requestOptionsChanged(){this.debounce("generate-request",function(){if(null==this.url){return}if(this.auto){this.generateRequest()}},this.debounceDuration)}});var IronControlState={properties:{/**
     * If true, the element currently has focus.
     */focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},/**
     * If true, the user cannot interact with this element.
     */disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},/**
     * Value of the `tabindex` attribute before `disabled` was activated.
     * `null` means the attribute was not present.
     * @type {?string|undefined}
     */_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function value(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],/**
   * @return {void}
   */ready:function ready(){this.addEventListener("focus",this._boundFocusBlurHandler,!0);this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function _focusBlurHandler(event){// Polymer takes care of retargeting events.
this._setFocused("focus"===event.type);return},_disabledChanged:function _disabledChanged(disabled,old){this.setAttribute("aria-disabled",disabled?"true":"false");this.style.pointerEvents=disabled?"none":"";if(disabled){// Read the `tabindex` attribute instead of the `tabIndex` property.
// The property returns `-1` if there is no `tabindex` attribute.
// This distinction is important when restoring the value because
// leaving `-1` hides shadow root children from the tab order.
this._oldTabIndex=this.getAttribute("tabindex");this._setFocused(!1);this.tabIndex=-1;this.blur()}else if(this._oldTabIndex!==void 0){if(null===this._oldTabIndex){this.removeAttribute("tabindex")}else{this.setAttribute("tabindex",this._oldTabIndex)}}},_changedControlState:function _changedControlState(){// _controlStateChanged is abstract, follow-on behaviors may implement it
if(this._controlStateChanged){this._controlStateChanged()}}};_exports.IronControlState=IronControlState;var ironControlState={IronControlState:IronControlState};_exports.$ironControlState=ironControlState;var IronButtonStateImpl={properties:{/**
     * If true, the user is currently holding down the button.
     */pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},/**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */toggles:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * If true, the button is a toggle and is currently in the active state.
     */active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},/**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */pointerDown:{type:Boolean,readOnly:!0,value:!1},/**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},/**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],/**
   * @type {!Object}
   */keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function _tapHandler(){if(this.toggles){// a tap is needed to toggle the active state
this._userActivate(!this.active)}else{this.active=!1}},_focusChanged:function _focusChanged(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(!1)}},_detectKeyboardFocus:function _detectKeyboardFocus(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},// to emulate native checkbox, (de-)activations from a user interaction fire
// 'change' events
_userActivate:function _userActivate(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function _downHandler(event){this._setPointerDown(!0);this._setPressed(!0);this._setReceivedFocusFromKeyboard(!1)},_upHandler:function _upHandler(){this._setPointerDown(!1);this._setPressed(!1)},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){var keyboardEvent=event.detail.keyboardEvent,target=(0,_shopApp.dom)(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(!0)},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){var keyboardEvent=event.detail.keyboardEvent,target=(0,_shopApp.dom)(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;if(this.pressed){this._asyncClick()}this._setPressed(!1)},// trigger click asynchronously, the asynchrony is useful to allow one
// event handler to unwind before triggering another event
_asyncClick:function _asyncClick(){this.async(function(){this.click()},1)},// any of these changes are considered a change to button state
_pressedChanged:function _pressedChanged(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function _ariaActiveAttributeChanged(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function _activeChanged(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function _controlStateChanged(){if(this.disabled){this._setPressed(!1)}else{this._changedButtonState()}},// provide hook for follow-on behaviors to react to button-state
_changedButtonState:function _changedButtonState(){if(this._buttonStateChanged){this._buttonStateChanged();// abstract
}}};/** @polymerBehavior */_exports.IronButtonStateImpl=IronButtonStateImpl;var IronButtonState=[_shopApp.IronA11yKeysBehavior,IronButtonStateImpl];_exports.IronButtonState=IronButtonState;var ironButtonState={IronButtonStateImpl:IronButtonStateImpl,IronButtonState:IronButtonState};_exports.$ironButtonState=ironButtonState;(0,_shopApp.Polymer)({_template:(0,_shopApp.html$1)(_templateObject2_04d6a060917111eda86f7317648a0965()),is:"iron-form",properties:{/*
     * Set this to true if you don't want the form to be submitted through an
     * ajax request, and you want the page to redirect to the action URL
     * after the form has been submitted.
     */allowRedirect:{type:Boolean,value:!1},/**
     * HTTP request headers to send. See PolymerElements/iron-ajax for
     * more details. Only works when `allowRedirect` is false.
     */headers:{type:Object,value:function value(){return{}}},/**
     * Set the `withCredentials` flag on the request. See
     * PolymerElements/iron-ajax for more details. Only works when
     * `allowRedirect` is false.
     */withCredentials:{type:Boolean,value:!1}},/**
   * Fired if the form cannot be submitted because it's invalid.
   *
   * @event iron-form-invalid
   */ /**
       * Fired after the form is submitted.
       *
       * @event iron-form-submit
       */ /**
           * Fired before the form is submitted.
           *
           * @event iron-form-presubmit
           */ /**
               * Fired after the form is reset.
               *
               * @event iron-form-reset
               */ /**
                   * Fired after the form is submitted and a response is received. An
                   * IronRequestElement is included as the event.detail object.
                   *
                   * @event iron-form-response
                   */ /**
                       * Fired after the form is submitted and an error is received. An
                       * error message is included in event.detail.error and an
                       * IronRequestElement is included in event.detail.request.
                       *
                       * @event iron-form-error
                       */ /**
                           * @return {void}
                           */attached:function attached(){// We might have been detached then re-attached.
// Avoid searching again for the <form> if we already found it.
if(this._form){return}// Search for the `<form>`, if we don't find it, observe for
// mutations.
this._form=(0,_shopApp.dom)(this).querySelector("form");if(this._form){this._init();// Since some elements might not be upgraded yet at this time,
// we won't be able to look into their shadowRoots for submittables.
// We wait a tick and check again for any missing submittable default
// values.
this.async(this._saveInitialValues.bind(this),1)}else{this._nodeObserver=(0,_shopApp.dom)(this).observeNodes(function(mutations){for(var i=0;i<mutations.addedNodes.length;i++){if("FORM"===mutations.addedNodes[i].tagName){this._form=mutations.addedNodes[i];// At this point in time, all custom elements are expected
// to be upgraded, hence we'll be able to traverse their
// shadowRoots.
this._init();(0,_shopApp.dom)(this).unobserveNodes(this._nodeObserver);this._nodeObserver=null}}}.bind(this))}},/**
   * @return {void}
   */detached:function detached(){if(this._nodeObserver){(0,_shopApp.dom)(this).unobserveNodes(this._nodeObserver);this._nodeObserver=null}},_init:function _init(){this._form.addEventListener("submit",this.submit.bind(this));this._form.addEventListener("reset",this.reset.bind(this));// Save the initial values.
this._defaults=this._defaults||new WeakMap;this._saveInitialValues()},/**
   * Saves the values of all form elements that will be used when resetting
   * the form. Initially called asynchronously on attach. Any time you
   * call this function, the previously saved values for a form element will
   * be overwritten.
   *
   * This function is useful if you are dynamically adding elements to
   * the form, or if your elements are asynchronously setting their values.
   * @return {void}
   */saveResetValues:function saveResetValues(){this._saveInitialValues(!0)},/**
   * @param {boolean=} overwriteValues
   * @return {void}
   */_saveInitialValues:function _saveInitialValues(overwriteValues){for(var nodes=this._getValidatableElements(),i=0,node;i<nodes.length;i++){node=nodes[i];if(!this._defaults.has(node)||overwriteValues){// Submittables are expected to have `value` property,
// that's what gets serialized.
var defaults={value:node.value};if("checked"in node){defaults.checked=node.checked}// In 1.x iron-form would reset `invalid`, so
// keep it here for backwards compat.
if("invalid"in node){defaults.invalid=node.invalid}this._defaults.set(node,defaults)}}},/**
   * Validates all the required elements (custom and native) in the form.
   * @return {boolean} True if all the elements are valid.
   */validate:function validate(){// If you've called this before distribution happened, bail out.
if(!this._form){return!1}if(""===this._form.getAttribute("novalidate"))return!0;// Start by making the form check the native elements it knows about.
// Go through all the elements, and validate the custom ones.
for(var valid=this._form.checkValidity(),elements=this._getValidatableElements(),el,i=0,validatable;el=elements[i],i<elements.length;i++){// This is weird to appease the compiler. We assume the custom element
// has a validate() method, otherwise we can't check it.
validatable=/** @type {{validate: (function() : boolean)}} */el;if(validatable.validate){valid=!!validatable.validate()&&valid}}return valid},/**
   * Submits the form.
   *
   * @param {Event=} event
   * @return {void}
   */submit:function submit(event){// We are not using this form for submission, so always cancel its event.
if(event){event.preventDefault()}// If you've called this before distribution happened, bail out.
if(!this._form){return}if(!this.validate()){this.fire("iron-form-invalid");return}// Remove any existing children in the submission form (from a previous
// submit).
this.$.helper.textContent="";var json=this.serializeForm();// If we want a redirect, submit the form natively.
if(this.allowRedirect){// If we're submitting the form natively, then create a hidden element for
// each of the values.
for(var element in json){this.$.helper.appendChild(this._createHiddenElement(element,json[element]))}// Copy the original form attributes.
this.$.helper.action=this._form.getAttribute("action");this.$.helper.method=this._form.getAttribute("method")||"GET";this.$.helper.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded";this.$.helper.submit();this.fire("iron-form-submit")}else{this._makeAjaxRequest(json)}},/**
   * Resets the form to the default values.
   *
   * @param {Event=} event
   * @return {void}
   */reset:function reset(event){// We are not using this form for submission, so always cancel its event.
if(event)event.preventDefault();// If you've called this before distribution happened, bail out.
if(!this._form){return}// Ensure the native form fired the `reset` event.
// User might have bound `<button on-click="_resetIronForm">`, or directly
// called `ironForm.reset()`. In these cases we want to first reset the
// native form.
if(!event||"reset"!==event.type||event.target!==this._form){this._form.reset();return}// Load the initial values.
for(var nodes=this._getValidatableElements(),i=0,node;i<nodes.length;i++){node=nodes[i];if(this._defaults.has(node)){var defaults=this._defaults.get(node);for(var propName in defaults){node[propName]=defaults[propName]}}}this.fire("iron-form-reset")},/**
   * Serializes the form as will be used in submission. Note that `serialize`
   * is a Polymer reserved keyword, so calling `someIronForm`.serialize()`
   * will give you unexpected results.
   * @return {!Object<string, *>} An object containing name-value pairs for elements that
   *                  would be submitted.
   */serializeForm:function serializeForm(){// Only elements that have a `name` and are not disabled are submittable.
for(var elements=this._getSubmittableElements(),json={},i=0,values;i<elements.length;i++){values=this._serializeElementValues(elements[i]);for(var v=0;v<values.length;v++){this._addSerializedElement(json,elements[i].name,values[v])}}return json},_handleFormResponse:function _handleFormResponse(event){this.fire("iron-form-response",event.detail)},_handleFormError:function _handleFormError(event){this.fire("iron-form-error",event.detail)},_makeAjaxRequest:function _makeAjaxRequest(json){// Initialize the iron-ajax element if we haven't already.
if(!this.request){this.request=document.createElement("iron-ajax");this.request.addEventListener("response",this._handleFormResponse.bind(this));this.request.addEventListener("error",this._handleFormError.bind(this))}// Native forms can also index elements magically by their name (can't make
// this up if I tried) so we need to get the correct attributes, not the
// elements with those names.
this.request.url=this._form.getAttribute("action");this.request.method=this._form.getAttribute("method")||"GET";this.request.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded";this.request.withCredentials=this.withCredentials;this.request.headers=this.headers;if("POST"===this._form.method.toUpperCase()){this.request.body=json}else{this.request.params=json}// Allow for a presubmit hook
var event=this.fire("iron-form-presubmit",{},{cancelable:!0});if(!event.defaultPrevented){this.request.generateRequest();this.fire("iron-form-submit",json)}},_getValidatableElements:function _getValidatableElements(){return this._findElements(this._form,!0,!1)},_getSubmittableElements:function _getSubmittableElements(){return this._findElements(this._form,!1,!1)},/**
   * Traverse the parent element to find and add all submittable nodes to
   * `submittable`.
   * @param  {!Node} parent The parent node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @param  {!boolean} skipSlots  Whether to skip traversing of slot elements
   * @param  {!Array<!Node>=} submittable Reference to the array of submittables
   * @return {!Array<!Node>}
   * @private
   */_findElements:function _findElements(parent,ignoreName,skipSlots,submittable){submittable=submittable||[];for(var nodes=(0,_shopApp.dom)(parent).querySelectorAll("*"),i=0;i<nodes.length;i++){// An element is submittable if it is not disabled, and if it has a
// name attribute.
if(!skipSlots&&("slot"===nodes[i].localName||"content"===nodes[i].localName)){this._searchSubmittableInSlot(submittable,nodes[i],ignoreName)}else{this._searchSubmittable(submittable,nodes[i],ignoreName)}}return submittable},/**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The slot or content node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */_searchSubmittableInSlot:function _searchSubmittableInSlot(submittable,node,ignoreName){for(var assignedNodes=(0,_shopApp.dom)(node).getDistributedNodes(),i=0;i<assignedNodes.length;i++){if(assignedNodes[i].nodeType===Node.TEXT_NODE){continue}// Note: assignedNodes does not contain <slot> or <content> because
// getDistributedNodes flattens the tree.
this._searchSubmittable(submittable,assignedNodes[i],ignoreName);for(var nestedAssignedNodes=(0,_shopApp.dom)(assignedNodes[i]).querySelectorAll("*"),j=0;j<nestedAssignedNodes.length;j++){this._searchSubmittable(submittable,nestedAssignedNodes[j],ignoreName)}}},/**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The node to be
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */_searchSubmittable:function _searchSubmittable(submittable,node,ignoreName){if(this._isSubmittable(node,ignoreName)){submittable.push(node)}else if(node.root){this._findElements(node.root,ignoreName,!0,submittable)}},/**
   * An element is submittable if it is not disabled, and if it has a
   * 'name' attribute. If we ignore the name, check if is validatable.
   * This allows `_findElements` to decide if to explore an element's shadowRoot
   * or not: an element implementing `validate()` is considered validatable, and
   * we don't search for validatables in its shadowRoot.
   * @param {!Node} node
   * @param {!boolean} ignoreName
   * @return {boolean}
   * @private
   */_isSubmittable:function _isSubmittable(node,ignoreName){return!node.disabled&&(ignoreName?node.name||"function"===typeof node.validate:node.name)},_serializeElementValues:function _serializeElementValues(element){// We will assume that every custom element that needs to be serialized
// has a `value` property, and it contains the correct value.
// The only weird one is an element that implements
// IronCheckedElementBehaviour, in which case like the native checkbox/radio
// button, it's only used when checked. For native elements, from
// https://www.w3.org/TR/html5/forms.html#the-form-element. Native
// submittable elements: button, input, keygen, object, select, textarea;
// 1. We will skip `keygen and `object` for this iteration, and deal with
// them if they're actually required.
// 2. <button> and <textarea> have a `value` property, so they behave like
//    the custom elements.
// 3. <select> can have multiple options selected, in which case its
//    `value` is incorrect, and we must use the values of each of its
//    `selectedOptions`
// 4. <input> can have a whole bunch of behaviours, so it's handled
// separately.
// 5. Buttons are hard. The button that was clicked to submit the form
//    is the one who's name/value gets sent to the server.
var tag=element.tagName.toLowerCase();if("button"===tag||"input"===tag&&("submit"===element.type||"reset"===element.type)){return[]}if("select"===tag){return this._serializeSelectValues(element)}else if("input"===tag){return this._serializeInputValues(element)}else{if(element._hasIronCheckedElementBehavior&&!element.checked)return[];return[element.value]}},_serializeSelectValues:function _serializeSelectValues(element){// A <select multiple> has an array of options, some of which can be
// selected.
for(var values=[],i=0;i<element.options.length;i++){if(element.options[i].selected){values.push(element.options[i].value)}}return values},_serializeInputValues:function _serializeInputValues(element){// Most of the inputs use their 'value' attribute, with the exception
// of radio buttons, checkboxes and file.
var type=element.type.toLowerCase();// Don't do anything for unchecked checkboxes/radio buttons.
// Don't do anything for file, since that requires a different request.
if(("checkbox"===type||"radio"===type)&&!element.checked||"file"===type){return[]}return[element.value]},_createHiddenElement:function _createHiddenElement(name,value){var input=document.createElement("input");input.setAttribute("type","hidden");input.setAttribute("name",name);input.setAttribute("value",value);return input},_addSerializedElement:function _addSerializedElement(json,name,value){// If the name doesn't exist, add it. Otherwise, serialize it to
// an array,
if(json[name]===void 0){json[name]=value}else{if(!Array.isArray(json[name])){json[name]=[json[name]]}json[name].push(value)}}});var IronMeta=/*#__PURE__*/function(){/**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */function IronMeta(options){babelHelpers.classCallCheck(this,IronMeta);IronMeta[" "](options);/** @type {string} */this.type=options&&options.type||"default";/** @type {string|null|undefined} */this.key=options&&options.key;if(options&&"value"in options){/** @type {*} */this.value=options.value}}/** @return {*} */babelHelpers.createClass(IronMeta,[{key:"byKey",/**
     * @param {string} key
     * @return {*}
     */value:function byKey(key){this.key=key;return this.value}},{key:"value",get:function get(){var type=this.type,key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}/** @param {*} value */,set:function set(value){var type=this.type,key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(null==value){delete type[key]}else{type[key]=value}}}/** @return {!Array<*>} */},{key:"list",get:function get(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map(function(key){return metaDatas[this.type][key]},this)}}}]);return IronMeta}();_exports.IronMeta=IronMeta;;// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;/**
                                `iron-meta` is a generic element you can use for sharing information across the
                                DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
                                such that any instance of iron-meta has access to the shared information. You
                                can use `iron-meta` to share whatever you want (or create an extension [like
                                x-meta] for enhancements).
                                
                                The `iron-meta` instances containing your actual data can be loaded in an
                                import, or constructed in any way you see fit. The only requirement is that you
                                create them before you try to access them.
                                
                                Examples:
                                
                                If I create an instance like this:
                                
                                    <iron-meta key="info" value="foo/bar"></iron-meta>
                                
                                Note that value="foo/bar" is the metadata I've defined. I could define more
                                attributes or use child nodes to define additional metadata.
                                
                                Now I can access that element (and it's metadata) from any iron-meta instance
                                via the byKey method, e.g.
                                
                                    meta.byKey('info');
                                
                                Pure imperative form would be like:
                                
                                    document.createElement('iron-meta').byKey('info');
                                
                                Or, in a Polymer element, you can include a meta in your template:
                                
                                    <iron-meta id="meta"></iron-meta>
                                    ...
                                    this.$.meta.byKey('info');
                                
                                @group Iron Elements
                                @demo demo/index.html
                                @element iron-meta
                                */(0,_shopApp.Polymer)({is:"iron-meta",properties:{/**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */type:{type:String,value:"default"},/**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */key:{type:String},/**
     * The meta-data to store or retrieve.
     * @type {*}
     */value:{type:String,notify:!0},/**
     * If true, `value` is set to the iron-meta instance itself.
     */self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function __computeMeta(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==void 0&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function _selfChanged(self){if(self){this.value=this}},/**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */byKey:function byKey(key){return new IronMeta({type:this.type,key:key}).value}});var ironMeta={IronMeta:IronMeta};_exports.$ironMeta=ironMeta;(0,_shopApp.Polymer)({_template:(0,_shopApp.html$1)(_templateObject3_04d6a060917111eda86f7317648a0965()),is:"iron-icon",properties:{/**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */icon:{type:String},/**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */theme:{type:String},/**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */src:{type:String},/**
     * @type {!IronMeta}
     */_meta:{value:_shopApp.Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function _iconChanged(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function _srcChanged(src){this._updateIcon()},_usesIconset:function _usesIconset(){return this.icon||!this.src},/** @suppress {visibility} */_updateIcon:function _updateIcon(){if(this._usesIconset()){if(this._img&&this._img.parentNode){(0,_shopApp.dom)(this.root).removeChild(this._img)}if(""===this._iconName){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=/** @type {?Polymer.Iconset} */this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=!1}this._img.src=this.src;(0,_shopApp.dom)(this.root).appendChild(this._img)}}});(0,_shopApp.Polymer)({is:"iron-iconset-svg",properties:{/**
     * The name of the iconset.
     */name:{type:String,observer:"_nameChanged"},/**
     * The size of an individual icon. Note that icons must be square.
     */size:{type:Number,value:24},/**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */rtlMirroring:{type:Boolean,value:!1},/**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function created(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function attached(){this.style.display="none"},/**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */getIconNames:function getIconNames(){this._icons=this._createIconMap();return Object.keys(this._icons).map(function(n){return this.name+":"+n},this)},/**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */applyIcon:function applyIcon(element,iconName){// Remove old svg element
this.removeIcon(element);// install new svg element
var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){// insert svg element into shadow root, if it exists
var pde=(0,_shopApp.dom)(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},/**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */removeIcon:function removeIcon(element){// Remove old svg element
if(element._svgIcon){(0,_shopApp.dom)(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},/**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */_targetIsRTL:function _targetIsRTL(target){if(null==this.__targetIsRTL){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===globalElement.getAttribute("dir")}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&"rtl"===window.getComputedStyle(target).direction}}return this.__targetIsRTL},/**
   *
   * When name is changed, register iconset metadata
   *
   */_nameChanged:function _nameChanged(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},/**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */_createIconMap:function _createIconMap(){// Objects chained to Object.prototype (`{}`) have members. Specifically,
// on FF there is a `watch` method that confuses the icon map, so we
// need to use a null-based object here.
var icons=Object.create(null);(0,_shopApp.dom)(this).querySelectorAll("[id]").forEach(function(icon){icons[icon.id]=icon});return icons},/**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */_cloneIcon:function _cloneIcon(id,mirrorAllowed){// create the icon map on-demand, since the iconset itself has no discrete
// signal to know when it's children are fully parsed
this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},/**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */_prepareSvgClone:function _prepareSvgClone(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(!0),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");// TODO(dfreedm): `pointer-events: none` works around
// https://crbug.com/370136
// TODO(sjmiles): inline style may not be ideal, but avoids requiring a
// shadow-root
svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});var Utility={distance:function distance(x1,y1,x2,y2){var xDelta=x1-x2,yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};/**
    * @param {HTMLElement} element
    * @constructor
    */function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=Math.max(this.width,this.height)}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function furthestCornerDistanceFrom(x,y){var topLeft=Utility.distance(x,y,0,0),topRight=Utility.distance(x,y,this.width,0),bottomLeft=Utility.distance(x,y,0,this.height),bottomRight=Utility.distance(x,y,this.width,this.height);return Math.max(topLeft,topRight,bottomLeft,bottomRight)}};/**
    * @param {HTMLElement} element
    * @constructor
    */function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement("div");this.waveContainer=document.createElement("div");this.wave.style.backgroundColor=this.color;this.wave.classList.add("wave");this.waveContainer.classList.add("wave-container");(0,_shopApp.dom)(this.waveContainer).appendChild(this.wave);this.resetInteractionState()}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed}return elapsed},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width,height2=this.containerMetrics.height*this.containerMetrics.height,waveRadius=1.1*Math.min(Math.sqrt(width2+height2),Ripple.MAX_RADIUS)+5,duration=1.1-.2*(waveRadius/Ripple.MAX_RADIUS),timeNow=this.mouseInteractionSeconds/duration,size=waveRadius*(1-Math.pow(80,-timeNow));return Math.abs(size)},get opacity(){if(!this.mouseUpStart){return this.initialOpacity}return Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity)},get outerOpacity(){// Linear increase in background opacity, capped at the opacity
// of the wavefront (waveOpacity).
var outerOpacity=.3*this.mouseUpElapsedSeconds,waveOpacity=this.opacity;return Math.max(0,Math.min(outerOpacity,waveOpacity))},get isOpacityFullyDecayed(){return .01>this.opacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,2*(this.radius/this.containerMetrics.size)/Math.sqrt(2))},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart)}return this.xStart},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart)}return this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function resetInteractionState(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element)},draw:function draw(){var scale,dx,dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;// 2d transform for safari because of border-radius and overflow:hidden
// clipping bug. https://bugs.webkit.org/show_bug.cgi?id=98538
this.waveContainer.style.webkitTransform="translate("+dx+"px, "+dy+"px)";this.waveContainer.style.transform="translate3d("+dx+"px, "+dy+"px, 0)";this.wave.style.webkitTransform="scale("+scale+","+scale+")";this.wave.style.transform="scale3d("+scale+","+scale+",1)"},/** @param {Event=} event */downAction:function downAction(event){var xCenter=this.containerMetrics.width/2,yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}else{this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px";this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px";this.waveContainer.style.width=this.containerMetrics.size+"px";this.waveContainer.style.height=this.containerMetrics.size+"px"},/** @param {Event=} event */upAction:function upAction(event){if(!this.isMouseDown){return}this.mouseUpStart=Utility.now()},remove:function remove(){(0,_shopApp.dom)(this.waveContainer.parentNode).removeChild(this.waveContainer)}};/**
   Material design: [Surface
   reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)
   
   `paper-ripple` provides a visual effect that other paper elements can
   use to simulate a rippling effect emanating from the point of contact.  The
   effect can be visualized as a concentric circle with motion.
   
   Example:
   
       <div style="position:relative">
         <paper-ripple></paper-ripple>
       </div>
   
   Note, it's important that the parent container of the ripple be relative
   position, otherwise the ripple will emanate outside of the desired container.
   
   `paper-ripple` listens to "mousedown" and "mouseup" events so it would display
   ripple effect when touches on it.  You can also defeat the default behavior and
   manually route the down and up actions to the ripple element.  Note that it is
   important if you call `downAction()` you will have to make sure to call
   `upAction()` so that `paper-ripple` would end the animation loop.
   
   Example:
   
       <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
       ...
       downAction: function(e) {
         this.$.ripple.downAction(e.detail);
       },
       upAction: function(e) {
         this.$.ripple.upAction();
       }
   
   Styling ripple effect:
   
     Use CSS color property to style the ripple:
   
       paper-ripple {
         color: #4285f4;
       }
   
     Note that CSS color property is inherited so it is not required to set it on
     the `paper-ripple` element directly.
   
   By default, the ripple is centered on the point of contact.  Apply the
   `recenters` attribute to have the ripple grow toward the center of its
   container.
   
       <paper-ripple recenters></paper-ripple>
   
   You can also  center the ripple inside its container from the start.
   
       <paper-ripple center></paper-ripple>
   
   Apply `circle` class to make the rippling effect within a circle.
   
       <paper-ripple class="circle"></paper-ripple>
   
   @group Paper Elements
   @element paper-ripple
   @hero hero.svg
   @demo demo/index.html
   */(0,_shopApp.Polymer)({_template:(0,_shopApp.html$1)(_templateObject4_04d6a060917111eda86f7317648a0965()),is:"paper-ripple",behaviors:[_shopApp.IronA11yKeysBehavior],properties:{/**
     * The initial opacity set on the wave.
     *
     * @attribute initialOpacity
     * @type number
     * @default 0.25
     */initialOpacity:{type:Number,value:.25},/**
     * How fast (opacity per second) the wave fades out.
     *
     * @attribute opacityDecayVelocity
     * @type number
     * @default 0.8
     */opacityDecayVelocity:{type:Number,value:.8},/**
     * If true, ripples will exhibit a gravitational pull towards
     * the center of their container as they fade away.
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */recenters:{type:Boolean,value:!1},/**
     * If true, ripples will center inside its container
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */center:{type:Boolean,value:!1},/**
     * A list of the visual ripples.
     *
     * @attribute ripples
     * @type Array
     * @default []
     */ripples:{type:Array,value:function value(){return[]}},/**
     * True when there are visible ripples animating within the
     * element.
     */animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},/**
     * If true, the ripple will remain in the "down" state until `holdDown`
     * is set to false again.
     */holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},/**
     * If true, the ripple will not generate a ripple effect
     * via pointer interaction.
     * Calling ripple's imperative api like `simulatedRipple` will
     * still generate the ripple effect.
     */noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function value(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},/**
   * @type {!Object}
   */keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function attached(){// Set up a11yKeysBehavior to listen to key events on the target,
// so that space and enter activate the ripple even if the target doesn't
// handle key events. The key handlers deal with `noink` themselves.
if(11==this.parentNode.nodeType){// DOCUMENT_FRAGMENT_NODE
this.keyEventTarget=(0,_shopApp.dom)(this).getOwnerRoot().host}else{this.keyEventTarget=this.parentNode}var keyEventTarget=/** @type {!EventTarget} */this.keyEventTarget;this.listen(keyEventTarget,"up","uiUpAction");this.listen(keyEventTarget,"down","uiDownAction")},detached:function detached(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return!0}}return!1},simulatedRipple:function simulatedRipple(){this.downAction(null);// Please see polymer/polymer#1305
this.async(function(){this.upAction()},1)},/**
   * Provokes a ripple down effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiDownAction:function uiDownAction(event){if(!this.noink){this.downAction(event)}},/**
   * Provokes a ripple down effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */downAction:function downAction(event){if(this.holdDown&&0<this.ripples.length){return}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=!0;this.animate()}},/**
   * Provokes a ripple up effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiUpAction:function uiUpAction(event){if(!this.noink){this.upAction(event)}},/**
   * Provokes a ripple up effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */upAction:function upAction(event){if(this.holdDown){return}this.ripples.forEach(function(ripple){ripple.upAction(event)});this._animating=!0;this.animate()},onAnimationComplete:function onAnimationComplete(){this._animating=!1;this.$.background.style.backgroundColor=null;this.fire("transitionend")},addRipple:function addRipple(){var ripple=new Ripple(this);(0,_shopApp.dom)(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(!0);return ripple},removeRipple:function removeRipple(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(0>rippleIndex){return}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(!1)}},/**
   * Deprecated. Please use animateRipple() instead.
   *
   * This method name conflicts with Element#animate().
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate.
   *
   * @suppress {checkTypes}
   */animate:function animate(){if(!this._animating){return}var index,ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple)}}if(!this.shouldKeepAnimating&&0===this.ripples.length){this.onAnimationComplete()}else{window.requestAnimationFrame(this._boundAnimate)}},/**
   * An alias for animate() whose name does not conflict with the platform
   * Element.animate() method.
   */animateRipple:function animateRipple(){return this.animate()},_onEnterKeydown:function _onEnterKeydown(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function _onSpaceKeydown(){this.uiDownAction()},_onSpaceKeyup:function _onSpaceKeyup(){this.uiUpAction()},// note: holdDown does not respect noink since it can be a focus based
// effect.
_holdDownChanged:function _holdDownChanged(newVal,oldVal){if(oldVal===void 0){return}if(newVal){this.downAction()}else{this.upAction()}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.
     @event transitionend
    @param {{node: Object}} detail Contains the animated node.
    */});var PaperRippleBehavior={properties:{/**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */noink:{type:Boolean,observer:"_noinkChanged"},/**
     * @type {Element|undefined}
     */_rippleContainer:{type:Object}},/**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */_buttonStateChanged:function _buttonStateChanged(){if(this.focused){this.ensureRipple()}},/**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */_downHandler:function _downHandler(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},/**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */ensureRipple:function ensureRipple(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){(0,_shopApp.dom)(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){// Check if the event happened inside of the ripple container
// Fall back to host instead of the root because distributed text
// nodes are not valid event targets
var domContainer=(0,_shopApp.dom)(this._rippleContainer||this),target=(0,_shopApp.dom)(optTriggeringEvent).rootTarget;if(domContainer.deepContains(/** @type {Node} */target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},/**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */getRipple:function getRipple(){this.ensureRipple();return this._ripple},/**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */hasRipple:function hasRipple(){return!!this._ripple},/**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */_createRipple:function _createRipple(){var element=/** @type {!PaperRippleElement} */document.createElement("paper-ripple");return element},_noinkChanged:function _noinkChanged(noink){if(this.hasRipple()){this._ripple.noink=noink}}};_exports.PaperRippleBehavior=PaperRippleBehavior;var paperRippleBehavior={PaperRippleBehavior:PaperRippleBehavior};_exports.$paperRippleBehavior=paperRippleBehavior;var PaperInkyFocusBehaviorImpl={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function _focusedChanged(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple()}if(this.hasRipple()){this._ripple.holdDown=receivedFocusFromKeyboard}},_createRipple:function _createRipple(){var ripple=PaperRippleBehavior._createRipple();ripple.id="ink";ripple.setAttribute("center","");ripple.classList.add("circle");return ripple}};/** @polymerBehavior */_exports.PaperInkyFocusBehaviorImpl=PaperInkyFocusBehaviorImpl;var PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];_exports.PaperInkyFocusBehavior=PaperInkyFocusBehavior;var paperInkyFocusBehavior={PaperInkyFocusBehaviorImpl:PaperInkyFocusBehaviorImpl,PaperInkyFocusBehavior:PaperInkyFocusBehavior};_exports.$paperInkyFocusBehavior=paperInkyFocusBehavior;(0,_shopApp.Polymer)({is:"paper-icon-button",_template:(0,_shopApp.html$1)(_templateObject5_04d6a060917111eda86f7317648a0965()),hostAttributes:{role:"button",tabindex:"0"},behaviors:[PaperInkyFocusBehavior],registered:function registered(){this._template.setAttribute("strip-whitespace","")},properties:{/**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */src:{type:String},/**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */icon:{type:String},/**
     * Specifies the alternate text for the button, for accessibility.
     */alt:{type:String,observer:"_altChanged"}},_altChanged:function _altChanged(newValue,oldValue){var label=this.getAttribute("aria-label");// Don't stomp over a user-set aria-label.
if(!label||oldValue==label){this.setAttribute("aria-label",newValue)}}});var PaperSpinnerBehavior={properties:{/**
     * Displays the spinner.
     */active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},/**
     * Alternative text content for accessibility support.
     * If alt is present, it will add an aria-label whose content matches alt
     * when active. If alt is not present, it will default to 'loading' as the
     * alt value.
     */alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function __computeContainerClasses(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function __activeChanged(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function __altChanged(alt){// user-provided `aria-label` takes precedence over prototype default
if("loading"===alt){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(""===alt);this.setAttribute("aria-label",alt)}},__setAriaHidden:function __setAriaHidden(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function __reset(){this.active=!1;this.__coolingDown=!1}};_exports.PaperSpinnerBehavior=PaperSpinnerBehavior;var paperSpinnerBehavior={PaperSpinnerBehavior:PaperSpinnerBehavior};/**
   @license
   Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
   found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
   part of the polymer project is also subject to an additional IP rights grant
   found at http://polymer.github.io/PATENTS.txt
   */_exports.$paperSpinnerBehavior=paperSpinnerBehavior;var $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML="<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        content: '';\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper .circle {\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper .circle {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left .circle {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right .circle {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper .circle {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left .circle {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right .circle {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer.content);var template=(0,_shopApp.html$1)(_templateObject6_04d6a060917111eda86f7317648a0965());template.setAttribute("strip-whitespace","");/**
                                               Material design: [Progress &
                                               activity](https://www.google.com/design/spec/components/progress-activity.html)
                                               
                                               Element providing a single color material design circular spinner.
                                               
                                                   <paper-spinner-lite active></paper-spinner-lite>
                                               
                                               The default spinner is blue. It can be customized to be a different color.
                                               
                                               ### Accessibility
                                               
                                               Alt attribute should be set to provide adequate context for accessibility. If
                                               not provided, it defaults to 'loading'. Empty alt can be provided to mark the
                                               element as decorative if alternative content is provided in another form (e.g. a
                                               text block following the spinner).
                                               
                                                   <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>
                                               
                                               ### Styling
                                               
                                               The following custom properties and mixins are available for styling:
                                               
                                               Custom property | Description | Default
                                               ----------------|-------------|----------
                                               `--paper-spinner-color` | Color of the spinner | `--google-blue-500`
                                               `--paper-spinner-stroke-width` | The width of the spinner stroke | 3px
                                               
                                               @group Paper Elements
                                               @element paper-spinner-lite
                                               @hero hero.svg
                                               @demo demo/index.html
                                               */(0,_shopApp.Polymer)({_template:template,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});var $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML="<iron-iconset-svg style=\"display:none\" name=\"icons\" size=\"24\">\n<svg><defs>\n<g id=\"arrow-back\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path></g>\n<g id=\"menu\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g>\n<g id=\"shopping-cart\"><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g>\n<g id=\"close\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g>\n<g id=\"perm-scan-wifi\"><path d=\"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z\"></path></g>\n<g id=\"error\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></g>\n<g id=\"developer-console\"><path d=\"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z\"/></g>\n</defs></svg>\n</iron-iconset-svg>";document.head.appendChild($_documentContainer$1.content);var ShopAnalytics=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(ShopAnalytics,_HTMLElement);function ShopAnalytics(){babelHelpers.classCallCheck(this,ShopAnalytics);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopAnalytics).apply(this,arguments))}babelHelpers.createClass(ShopAnalytics,[{key:"connectedCallback",value:function connectedCallback(){// track metrics with google analytics...
(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date;a=s.createElement(o),m=s.getElementsByTagName("body")[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create",this.getAttribute("key"),"auto");ga("send","pageview")}}]);return ShopAnalytics}(babelHelpers.wrapNativeSuper(HTMLElement));customElements.define("shop-analytics",ShopAnalytics);var ShopCartData=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(ShopCartData,_PolymerElement);function ShopCartData(){babelHelpers.classCallCheck(this,ShopCartData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopCartData).apply(this,arguments))}babelHelpers.createClass(ShopCartData,[{key:"addItem",value:function addItem(detail){var i=this._indexOfEntry(detail.item.name,detail.size);if(-1!==i){detail.quantity+=this.cart[i].quantity}this.setItem(detail)}},{key:"setItem",value:function setItem(detail){var i=this._indexOfEntry(detail.item.name,detail.size);if(0===detail.quantity){// Remove item from cart when the new quantity is 0.
if(-1!==i){this.splice("cart",i,1)}}else{// Use Polymer's array mutation methods (`splice`, `push`) so that observers
// on `cart.splices` are triggered.
if(-1!==i){this.splice("cart",i,1,detail)}else{this.push("cart",detail)}}}},{key:"clearCart",value:function clearCart(){this.cart=[]}},{key:"_computeNumItems",value:function _computeNumItems(){if(this.cart){return this.cart.reduce(function(total,entry){return total+entry.quantity},0)}return 0}},{key:"_computeTotal",value:function _computeTotal(){if(this.cart){return this.cart.reduce(function(total,entry){return total+entry.quantity*entry.item.price},0)}return 0}},{key:"_indexOfEntry",value:function _indexOfEntry(name,size){if(this.cart){for(var i=0,entry;i<this.cart.length;++i){entry=this.cart[i];if(entry.item.name===name&&entry.size===size){return i}}}return-1}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject7_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-cart-data"}},{key:"properties",get:function get(){return{cart:{type:Array,value:function value(){return[]},notify:!0},numItems:{type:Number,computed:"_computeNumItems(cart.splices)",notify:!0},total:{type:Number,computed:"_computeTotal(cart.splices)",notify:!0}}}}]);return ShopCartData}(_shopApp.PolymerElement);customElements.define(ShopCartData.is,ShopCartData);var ShopCartModal=/*#__PURE__*/function(_mixinBehaviors){babelHelpers.inherits(ShopCartModal,_mixinBehaviors);function ShopCartModal(){babelHelpers.classCallCheck(this,ShopCartModal);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopCartModal).apply(this,arguments))}babelHelpers.createClass(ShopCartModal,[{key:"ready",value:function ready(){var _this=this;babelHelpers.get(babelHelpers.getPrototypeOf(ShopCartModal.prototype),"ready",this).call(this);this.setAttribute("role","dialog");this.setAttribute("aria-modal","true");this.addEventListener("transitionend",function(e){return _this._transitionEnd(e)});this.addEventListener("iron-overlay-canceled",function(e){return _this._onCancel(e)})}},{key:"_renderOpened",value:function _renderOpened(){this.restoreFocusOnClose=!0;this.backdropElement.style.display="none";this.classList.add("opened")}},{key:"_renderClosed",value:function _renderClosed(){this.classList.remove("opened")}},{key:"_onCancel",value:function _onCancel(e){// Don't restore focus when the overlay is closed after a mouse event
if(babelHelpers.instanceof(e.detail,MouseEvent)){this.restoreFocusOnClose=!1}}},{key:"_transitionEnd",value:function _transitionEnd(e){if(e.target!==this||"transform"!==e.propertyName){return}if(this.opened){this._finishRenderOpened();this.fire("announce","Item added to the cart")}else{this._finishRenderClosed();this.backdropElement.style.display=""}}},{key:"refit",value:function refit(){}},{key:"notifyResize",value:function notifyResize(){}},{key:"_focusableNodes",get:function get(){return[this.$.viewCartAnchor,this.$.closeBtn]}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject8_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-cart-modal"}},{key:"properties",get:function get(){return{withBackdrop:{type:Boolean,value:!0}}}}]);return ShopCartModal}((0,_shopApp.mixinBehaviors)([_shopApp.IronOverlayBehaviorImpl],_shopApp.PolymerElement));customElements.define(ShopCartModal.is,ShopCartModal);var ShopSnackbar=/*#__PURE__*/function(_PolymerElement2){babelHelpers.inherits(ShopSnackbar,_PolymerElement2);function ShopSnackbar(){babelHelpers.classCallCheck(this,ShopSnackbar);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopSnackbar).apply(this,arguments))}babelHelpers.createClass(ShopSnackbar,[{key:"open",value:function open(){(0,_shopApp.flush)();this.offsetHeight&&this.classList.add("opened");this._closeDebouncer=_shopApp.Debouncer.debounce(this._closeDebouncer,_shopApp.timeOut.after(4e3),this.close.bind(this))}},{key:"close",value:function close(){this.classList.remove("opened")}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject9_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-snackbar"}}]);return ShopSnackbar}(_shopApp.PolymerElement);customElements.define(ShopSnackbar.is,ShopSnackbar);var ShopTabsOverlay=/*#__PURE__*/function(_PolymerElement3){babelHelpers.inherits(ShopTabsOverlay,_PolymerElement3);babelHelpers.createClass(ShopTabsOverlay,null,[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject10_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-tabs-overlay"}},{key:"properties",get:function get(){return{/**
       * The element the overlay should cover.
       */target:{type:Object,observer:"_targetChanged"}}}}]);function ShopTabsOverlay(){var _this2;babelHelpers.classCallCheck(this,ShopTabsOverlay);_this2=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopTabsOverlay).call(this));_this2._lastTarget=void 0;_this2._transitionsInFlight=[];return _this2}babelHelpers.createClass(ShopTabsOverlay,[{key:"ready",value:function ready(){var _this3=this;babelHelpers.get(babelHelpers.getPrototypeOf(ShopTabsOverlay.prototype),"ready",this).call(this);this.addEventListener("transitionend",function(e){return _this3._onTransitionend(e)})}},{key:"_targetChanged",value:function _targetChanged(newTarget,oldTarget){if(!this._transitionsInFlight.length){if(this._lastTarget){this._lastTarget.classList.remove("shop-tabs-overlay-static-above")}this.style.display="block";this._move(oldTarget,newTarget);this._lastTarget=this.target}}},{key:"_onTransitionend",value:function _onTransitionend(event){var index=this._transitionsInFlight.indexOf(event.propertyName);if(0<=index){this._transitionsInFlight.splice(index,1)}if(!this._transitionsInFlight.length){this._moveComplete()}}},{key:"_moveComplete",value:function _moveComplete(){if(this._lastTarget!==this.target){this._move(this._lastTarget,this.target);this._lastTarget=this.target}else{if(this._lastTarget){this._lastTarget.classList.add("shop-tabs-overlay-static-above")}this.style.display="none"}}},{key:"_move",value:function _move(oldTarget,newTarget){var _this4=this,from=oldTarget||newTarget,to=newTarget||oldTarget;if(!from&&!to)return;var fromOpacity=oldTarget?1:0,toOpacity=newTarget?1:0;(0,_shopApp.flush)();var thisRect=this.getBoundingClientRect(),thisStyle=window.getComputedStyle(this),fromRect=from.getBoundingClientRect(),toRect=to.getBoundingClientRect();if(0===toRect.top&&0===toRect.right&&0===toRect.bottom&&0===toRect.left&&0===toRect.width&&0===toRect.height){this.style.transitionProperty="none";this.style.opacity=toOpacity;this._transitionsInFlight=[];_shopApp.microTask.run(this._moveComplete.bind(this));return}else{this.style.transitionProperty=""}var top=parseFloat(thisStyle.top||"0")+(fromRect.top-thisRect.top),right=parseFloat(thisStyle.right||"0")-(fromRect.right-thisRect.right),bottom=parseFloat(thisStyle.bottom||"0")-(fromRect.bottom-thisRect.bottom),left=parseFloat(thisStyle.left||"0")+(fromRect.left-thisRect.left);this.style.transitionDuration="0s";this.style.transitionDelay="0s";var startValues=[this.style.top=top+"px",this.style.right=right+"px",this.style.bottom=bottom+"px",this.style.left=left+"px",this.style.opacity=fromOpacity+""];top+=toRect.top-fromRect.top;right-=toRect.right-fromRect.right;bottom-=toRect.bottom-fromRect.bottom;left+=toRect.left-fromRect.left;var durations=[.2,.2,.2,.2,.2],delays=[0,0,0,0,0];// Delay left / right transitions if element is left / right of the target.
if(fromRect.left<toRect.left&&fromRect.right<toRect.right){delays[3]=.1}else if(fromRect.left>toRect.left&&fromRect.right>toRect.right){delays[1]=.1}// Delay top / bottom transitions if element is above / below the target.
if(fromRect.top<toRect.top&&fromRect.bottom<toRect.bottom){delays[0]=.1}else if(fromRect.top>toRect.top&&fromRect.bottom>toRect.bottom){delays[2]=.1}for(var endValues=[top+"px",right+"px",bottom+"px",left+"px",toOpacity+""],names=["top","right","bottom","left","opacity"],i=0;i<startValues.length;i++){if(startValues[i]===endValues[i])continue;if(0===durations[i]&&0===delays[i])continue;this._transitionsInFlight.push(names[i])}_shopApp.timeOut.run(function(){_this4.style.transitionDuration=durations.map(function(x){return x+"s"}).join(", ");_this4.style.transitionDelay=delays.map(function(x){return x+"s"}).join(", ");_this4.style.top=top+"px";_this4.style.right=right+"px";_this4.style.bottom=bottom+"px";_this4.style.left=left+"px";_this4.style.opacity=toOpacity+""},1)}}]);return ShopTabsOverlay}(_shopApp.PolymerElement);customElements.define(ShopTabsOverlay.is,ShopTabsOverlay);var ShopTabs=/*#__PURE__*/function(_mixinBehaviors2){babelHelpers.inherits(ShopTabs,_mixinBehaviors2);function ShopTabs(){babelHelpers.classCallCheck(this,ShopTabs);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopTabs).apply(this,arguments))}babelHelpers.createClass(ShopTabs,[{key:"_onSelectedItemChanged",value:function _onSelectedItemChanged(selectedItem){if(selectedItem===void 0&&this.selected)return;this.$.overlay.target=selectedItem}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject11_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-tabs"}},{key:"observers",get:function get(){return["_onSelectedItemChanged(selectedItem)"]}}]);return ShopTabs}((0,_shopApp.mixinBehaviors)([_shopApp.IronSelectableBehavior],_shopApp.PolymerElement));customElements.define(ShopTabs.is,ShopTabs);var ShopRippleContainer=/*#__PURE__*/function(_mixinBehaviors3){babelHelpers.inherits(ShopRippleContainer,_mixinBehaviors3);babelHelpers.createClass(ShopRippleContainer,null,[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject12_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-ripple-container"}}]);function ShopRippleContainer(){var _this5;babelHelpers.classCallCheck(this,ShopRippleContainer);_this5=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopRippleContainer).call(this));_this5._isDown=!1;return _this5}babelHelpers.createClass(ShopRippleContainer,[{key:"ready",value:function ready(){var _this6=this;babelHelpers.get(babelHelpers.getPrototypeOf(ShopRippleContainer.prototype),"ready",this).call(this);this.addEventListener("focus",function(e){return _this6._onFocus(e)},!0);this.addEventListener("blur",function(e){return _this6._onBlur(e)},!0);(0,_shopApp.addListener)(this,"down",this._rippleDown);(0,_shopApp.addListener)(this,"up",this._rippleUp)}},{key:"_onFocus",value:function _onFocus(event){// Prevent second ripple when clicking causes both focus and down.
if(!this._isDown){this._rippleDown(event)}}},{key:"_onBlur",value:function _onBlur(event){this._rippleUp(event)}},{key:"_rippleDown",value:function _rippleDown(event){this._isDown=!0;this.getRipple().downAction(event)}},{key:"_rippleUp",value:function _rippleUp(event){this._isDown=!1;this.getRipple().upAction(event)}}]);return ShopRippleContainer}((0,_shopApp.mixinBehaviors)([PaperRippleBehavior],_shopApp.PolymerElement));customElements.define(ShopRippleContainer.is,ShopRippleContainer);var ShopTab=/*#__PURE__*/function(_PolymerElement4){babelHelpers.inherits(ShopTab,_PolymerElement4);function ShopTab(){babelHelpers.classCallCheck(this,ShopTab);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopTab).apply(this,arguments))}babelHelpers.createClass(ShopTab,null,[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject13_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-tab"}}]);return ShopTab}(_shopApp.PolymerElement);customElements.define(ShopTab.is,ShopTab);var ShopNetworkWarning=/*#__PURE__*/function(_PolymerElement5){babelHelpers.inherits(ShopNetworkWarning,_PolymerElement5);function ShopNetworkWarning(){babelHelpers.classCallCheck(this,ShopNetworkWarning);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopNetworkWarning).apply(this,arguments))}babelHelpers.createClass(ShopNetworkWarning,[{key:"_tryReconnect",value:function _tryReconnect(){this.dispatchEvent(new CustomEvent("try-reconnect",{composed:!0}))}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject14_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-network-warning"}},{key:"properties",get:function get(){return{offline:Boolean}}}]);return ShopNetworkWarning}(_shopApp.PolymerElement);customElements.define(ShopNetworkWarning.is,ShopNetworkWarning);var Shop404Warning=/*#__PURE__*/function(_PolymerElement6){babelHelpers.inherits(Shop404Warning,_PolymerElement6);function Shop404Warning(){babelHelpers.classCallCheck(this,Shop404Warning);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Shop404Warning).apply(this,arguments))}babelHelpers.createClass(Shop404Warning,null,[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject15_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-404-warning"}}]);return Shop404Warning}(_shopApp.PolymerElement);customElements.define(Shop404Warning.is,Shop404Warning);var ShopCartItem=/*#__PURE__*/function(_PolymerElement7){babelHelpers.inherits(ShopCartItem,_PolymerElement7);function ShopCartItem(){babelHelpers.classCallCheck(this,ShopCartItem);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopCartItem).apply(this,arguments))}babelHelpers.createClass(ShopCartItem,[{key:"_quantityChange",value:function _quantityChange(){this._setCartItem(parseInt(this.$.quantitySelect.value,10))}},{key:"_setCartItem",value:function _setCartItem(quantity){this.dispatchEvent(new CustomEvent("set-cart-item",{bubbles:!0,composed:!0,detail:{item:this.entry.item,quantity:quantity,size:this.entry.size}}))}},{key:"_formatPrice",value:function _formatPrice(price){return price?"$"+price.toFixed(2):""}},{key:"_removeItem",value:function _removeItem(){this._setCartItem(0)}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject16_04d6a060917111eda86f7317648a0965())}},{key:"is",get:function get(){return"shop-cart-item"}},{key:"properties",get:function get(){return{entry:Object}}}]);return ShopCartItem}(_shopApp.PolymerElement);customElements.define(ShopCartItem.is,ShopCartItem);/*
                                                      @license
                                                      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
                                                      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                      Code distributed by Google as part of the polymer project is also
                                                      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                      */ // shop-app
});