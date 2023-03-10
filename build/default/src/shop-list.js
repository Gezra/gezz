define(["../node_modules/@polymer/polymer/polymer-element.js", "../node_modules/@polymer/app-route/app-route.js", "../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js", "./shop-category-data.js", "./shop-common-styles.js", "./shop-image.js", "./shop-list-item.js", "../node_modules/@polymer/polymer/lib/utils/debounce.js", "../node_modules/@polymer/polymer/lib/utils/async.js"], function (_polymerElement, _appRoute, _ironFlexLayout, _shopCategoryData, _shopCommonStyles, _shopImage, _shopListItem, _debounce, _async) {
  "use strict";

  class ShopList extends _polymerElement.PolymerElement {
    static get template() {
      return _polymerElement.html`
    <style include="shop-common-styles">

      .hero-image {
        position: relative;
        height: 320px;
        overflow: hidden;
        margin-bottom: 32px;
      }

      .hero-image {
        --shop-image-img: {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -9999px;
          right: -9999px;
          max-width: none;
        };
      }

      .grid {
        @apply --layout-horizontal;
        @apply --layout-wrap;
        @apply --layout-justified;
        margin: 0 10px 32px 10px;
        padding: 0;
        list-style: none;
      }

      .grid li {
        -webkit-flex: 1 1;
        flex: 1 1;
        -webkit-flex-basis: 33%;
        flex-basis: 33%;
        max-width: 33%;
      }

      .grid a {
        display:block;
        text-decoration: none;
      }

      @media (max-width: 767px) {
        .hero-image {
          display: none;
        }

        .grid  li {
          -webkit-flex-basis: 50%;
          flex-basis: 50%;
          max-width: 50%;
        }
      }

    </style>

    <!--
      app-route provides the name of the category.
    -->
    <app-route
        route="[[route]]"
        pattern="/:category"
        data="{{routeData}}"></app-route>

    <!--
      shop-category-data provides the category data for a given category name.
    -->
    <shop-category-data
        id="categoryData"
        category-name="[[routeData.category]]"
        category="{{category}}"
        failure="{{failure}}"></shop-category-data>

    <shop-image
        alt="[[category.title]]"
        src="[[category.image]]"
        placeholder-img="[[category.placeholder]]" class="hero-image"></shop-image>

    <header>
      <h1>[[category.title]]</h1>
      <span>[[_getPluralizedQuantity(category.items.length)]]</span>
    </header>

    <ul class="grid" hidden$="[[failure]]">
      <dom-repeat items="[[_getListItems(category.items)]]" initial-count="4">
        <template>
          <li>
            <a href$="[[_getItemHref(item)]]"><shop-list-item item="[[item]]"></shop-list-item></a>
          </li>
        </template>
      </dom-repeat>
    </ul>

    <!--
      shop-network-warning shows a warning message when the items can't be rendered due
      to network conditions.
    -->
    <shop-network-warning
        hidden$="[[!failure]]"
        offline="[[offline]]"
        on-try-reconnect="_tryReconnect"></shop-network-warning>

  </template>
  `;
    }

    static get is() {
      return 'shop-list';
    }

    static get properties() {
      return {
        category: Object,
        route: Object,
        routeData: Object,
        visible: {
          type: Boolean,
          value: false
        },
        offline: {
          type: Boolean,
          observer: '_offlineChanged'
        },
        failure: Boolean
      };
    }

    static get observers() {
      return ['_categoryChanged(category, visible)'];
    }

    connectedCallback() {
      super.connectedCallback();
      this.isAttached = true;
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this.isAttached = false;
    }

    _getListItems(items) {
      // Return placeholder items when the items haven't loaded yet.
      return items || [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    }

    _getItemHref(item) {
      // By returning null when `itemId` is undefined, the href attribute won't be set and
      // the link will be disabled.
      return item.name ? ['/detail', this.category.name, item.name].join('/') : null;
    }

    _getPluralizedQuantity(quantity) {
      if (!quantity) {
        return '';
      }

      let pluralizedQ = quantity === 1 ? 'item' : 'items';
      return '(' + quantity + ' ' + pluralizedQ + ')';
    }

    _categoryChanged(category, visible) {
      if (!visible) {
        return;
      }

      this._changeSectionDebouncer = _debounce.Debouncer.debounce(this._changeSectionDebouncer, _async.microTask, () => {
        if (category) {
          // Notify the category and the page's title
          this.dispatchEvent(new CustomEvent('change-section', {
            bubbles: true,
            composed: true,
            detail: {
              category: category.name,
              title: category.title,
              image: this.baseURI + category.image
            }
          }));
        } else {
          this.dispatchEvent(new CustomEvent('show-invalid-url-warning', {
            bubbles: true,
            composed: true
          }));
        }
      });
    }

    _tryReconnect() {
      this.$.categoryData.refresh();
    }

    _offlineChanged(offline) {
      if (!offline && this.isAttached) {
        this._tryReconnect();
      }
    }

  }

  customElements.define(ShopList.is, ShopList);
});