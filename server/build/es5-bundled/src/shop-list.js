define(["./shop-app.js"],function(_shopApp){"use strict";function _templateObject2_d039ffa0917011eda892694d5d951519(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-common-styles\">\n\n      .hero-image {\n        position: relative;\n        height: 320px;\n        overflow: hidden;\n        margin-bottom: 32px;\n      }\n\n      .hero-image {\n        --shop-image-img: {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: -9999px;\n          right: -9999px;\n          max-width: none;\n        };\n      }\n\n      .grid {\n        @apply --layout-horizontal;\n        @apply --layout-wrap;\n        @apply --layout-justified;\n        margin: 0 10px 32px 10px;\n        padding: 0;\n        list-style: none;\n      }\n\n      .grid li {\n        -webkit-flex: 1 1;\n        flex: 1 1;\n        -webkit-flex-basis: 33%;\n        flex-basis: 33%;\n        max-width: 33%;\n      }\n\n      .grid a {\n        display:block;\n        text-decoration: none;\n      }\n\n      @media (max-width: 767px) {\n        .hero-image {\n          display: none;\n        }\n\n        .grid  li {\n          -webkit-flex-basis: 50%;\n          flex-basis: 50%;\n          max-width: 50%;\n        }\n      }\n\n    </style>\n\n    <!--\n      app-route provides the name of the category.\n    -->\n    <app-route\n        route=\"[[route]]\"\n        pattern=\"/:category\"\n        data=\"{{routeData}}\"></app-route>\n\n    <!--\n      shop-category-data provides the category data for a given category name.\n    -->\n    <shop-category-data\n        id=\"categoryData\"\n        category-name=\"[[routeData.category]]\"\n        category=\"{{category}}\"\n        failure=\"{{failure}}\"></shop-category-data>\n\n    <shop-image\n        alt=\"[[category.title]]\"\n        src=\"[[category.image]]\"\n        placeholder-img=\"[[category.placeholder]]\" class=\"hero-image\"></shop-image>\n\n    <header>\n      <h1>[[category.title]]</h1>\n      <span>[[_getPluralizedQuantity(category.items.length)]]</span>\n    </header>\n\n    <ul class=\"grid\" hidden$=\"[[failure]]\">\n      <dom-repeat items=\"[[_getListItems(category.items)]]\" initial-count=\"4\">\n        <template>\n          <li>\n            <a href$=\"[[_getItemHref(item)]]\"><shop-list-item item=\"[[item]]\"></shop-list-item></a>\n          </li>\n        </template>\n      </dom-repeat>\n    </ul>\n\n    <!--\n      shop-network-warning shows a warning message when the items can't be rendered due\n      to network conditions.\n    -->\n    <shop-network-warning\n        hidden$=\"[[!failure]]\"\n        offline=\"[[offline]]\"\n        on-try-reconnect=\"_tryReconnect\"></shop-network-warning>\n\n  </template>\n  "]);_templateObject2_d039ffa0917011eda892694d5d951519=function _templateObject2_d039ffa0917011eda892694d5d951519(){return data};return data}function _templateObject_d039ffa0917011eda892694d5d951519(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n\n      :host {\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        text-align: center;\n        margin: 0 48px;\n      }\n\n      shop-image {\n        margin: 32px 0 16px;\n      }\n\n      shop-image::before {\n        content: \"\";\n        display: block;\n        padding-top: 100%;\n      }\n\n      .title {\n        color: var(--app-primary-color);\n        font-weight: bold;\n      }\n\n      .price {\n        color: var(--app-secondary-color);\n      }\n\n      @media (max-width: 767px) {\n        :host {\n          margin: 0 12px;\n        }\n      }\n\n    </style>\n\n    <shop-image src=\"[[item.image]]\" alt=\"[[item.title]]\"></shop-image>\n    <div class=\"title\">[[item.title]]</div>\n    <span class=\"price\">[[_formatPrice(item.price)]]</span>\n"]);_templateObject_d039ffa0917011eda892694d5d951519=function _templateObject_d039ffa0917011eda892694d5d951519(){return data};return data}var ShopListItem=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(ShopListItem,_PolymerElement);function ShopListItem(){babelHelpers.classCallCheck(this,ShopListItem);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopListItem).apply(this,arguments))}babelHelpers.createClass(ShopListItem,[{key:"_formatPrice",value:function _formatPrice(price){return price?"$"+price.toFixed(2):""}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject_d039ffa0917011eda892694d5d951519())}},{key:"is",get:function get(){return"shop-list-item"}},{key:"properties",get:function get(){return{item:Object}}}]);return ShopListItem}(_shopApp.PolymerElement);customElements.define(ShopListItem.is,ShopListItem);var ShopList=/*#__PURE__*/function(_PolymerElement2){babelHelpers.inherits(ShopList,_PolymerElement2);function ShopList(){babelHelpers.classCallCheck(this,ShopList);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopList).apply(this,arguments))}babelHelpers.createClass(ShopList,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(ShopList.prototype),"connectedCallback",this).call(this);this.isAttached=!0/* ignoreName */ /* skipSlots */}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(ShopList.prototype),"disconnectedCallback",this).call(this);this.isAttached=/* ignoreName */!1/* skipSlots */ /* skipSlots */}},{key:"_getListItems",value:function _getListItems(items){// Return placeholder items when the items haven't loaded yet.
return items||[{},{},{},{},{},{},{},{},{},{}]}},{key:"_getItemHref",value:function _getItemHref(item){// By returning null when `itemId` is undefined, the href attribute won't be set and
// the link will be disabled.
return item.name?["/detail",this.category.name,item.name].join("/"):null}},{key:"_getPluralizedQuantity",value:function _getPluralizedQuantity(quantity){if(!quantity){return""}var pluralizedQ=1===quantity?"item":"items";return"("+quantity+" "+pluralizedQ+")"}},{key:"_categoryChanged",value:function _categoryChanged(category,visible){var _this=this;if(!visible){return}this._changeSectionDebouncer=_shopApp.Debouncer.debounce(this._changeSectionDebouncer,_shopApp.microTask,function(){if(category){// Notify the category and the page's title
_this.dispatchEvent(new CustomEvent("change-section",{bubbles:!0,composed:!0,detail:{category:category.name,title:category.title,image:_this.baseURI+category.image}}))}else{_this.dispatchEvent(new CustomEvent("show-invalid-url-warning",{bubbles:!0,composed:!0}))}})}},{key:"_tryReconnect",value:function _tryReconnect(){this.$.categoryData.refresh()}},{key:"_offlineChanged",value:function _offlineChanged(offline){if(!offline&&this.isAttached){this._tryReconnect()}}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject2_d039ffa0917011eda892694d5d951519())}},{key:"is",get:function get(){return"shop-list"}},{key:"properties",get:function get(){return{category:Object,route:Object,routeData:Object,visible:{type:Boolean,value:!1},offline:{type:Boolean,observer:"_offlineChanged"},failure:Boolean}}},{key:"observers",get:function get(){return["_categoryChanged(category, visible)"]}}]);return ShopList}(_shopApp.PolymerElement);customElements.define(ShopList.is,ShopList)});