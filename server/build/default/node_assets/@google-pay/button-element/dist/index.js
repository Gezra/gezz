define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Converts a camelCase property name to a kebab-case attribute name.
   */


  function getAttributeName(propertyName) {
    return propertyName.replace(/[A-Z]+/g, sub => `-${sub}`).replace(/^-/, '').toLowerCase();
  }
  /**
   * Defines that the target property should be exposed as an attribute, and
   * that changes to the attribute should trigger a `notifyPropertyChanged`
   * callback.
   *
   * @param attribute Override the attribute name to use. If ommitted, the
   * property name is used (coverted from camelCase, to kebab-case).
   */


  function NotifyAttribute(attribute) {
    return function (target, key) {
      const attr = attribute || getAttributeName(key);

      if (target.addObservedAttribute) {
        target.addObservedAttribute(attr);
      }

      Object.defineProperty(target, key, {
        get() {
          return this.getAttribute(attr);
        },

        set(value) {
          if (value === null || value === undefined) {
            this.removeAttribute(attr);
          } else {
            this.setAttribute(attr, value);
          }

          this.notifyPropertyChanged(key);
        },

        enumerable: true,
        configurable: true
      });
    };
  }
  /**
   * Defines that the target property should be exposed as boolean attribute, and
   * that changes to the attribute should trigger a `notifyPropertyChanged`
   * callback.
   *
   * @param attribute Override the attribute name to use. If ommitted, the
   * property name is used (coverted from camelCase, to snake-case).
   */


  function NotifyBooleanAttribute(attribute) {
    return function (target, key) {
      const attr = attribute || getAttributeName(key);

      if (target.addObservedAttribute) {
        target.addObservedAttribute(attr);
      }

      Object.defineProperty(target, key, {
        get() {
          return this.hasAttribute(attr);
        },

        set(value) {
          if (value) {
            this.setAttribute(attr, '');
          } else {
            this.removeAttribute(attr);
          }

          this.notifyPropertyChanged(key);
        },

        enumerable: true,
        configurable: true
      });
    };
  }
  /**
   * Defines that the target property should trigger a `notifyPropertyChanged`
   * callback when the property changes.
   *
   * @param attribute Expose the property as an attribute. Note that when
   * attribute is specified, this method has the same behavior as
   * `NotifyAttribute`.
   */


  function Notify(attribute) {
    if (attribute) {
      return NotifyAttribute(attribute);
    }

    return function (target, key) {
      Object.defineProperty(target, key, {
        get() {
          return this[`$__${key}`];
        },

        set(value) {
          this[`$__${key}`] = value;
          this.notifyPropertyChanged(key);
        },

        enumerable: true,
        configurable: true
      });
    };
  }
  /**
   * Creates an alias for the given property with a getter and a setter.
   *
   * @param alias Name of the alias.
   */


  function Alias(alias) {
    return function (target, key) {
      Object.defineProperty(target, alias, {
        get() {
          return this[key];
        },

        set(value) {
          this[key] = value;
        },

        enumerable: true,
        configurable: false
      });
    };
  }
  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Keeps track scripts that have been requested by loadScript.
   */


  let cachedScripts = {};
  /**
   * Asynchronously loads a script keeping track of which scripts have already
   * requested and loaded.
   *
   * Multiple requests to the same resource will return the same promise.
   *
   * @param src Script URL to load
   */

  function loadScript(src) {
    const existing = cachedScripts[src];

    if (existing) {
      return existing;
    }

    const promise = new Promise((resolve, reject) => {
      // Create script
      const script = document.createElement('script');
      script.src = src;
      script.async = true; // Script event listener callbacks for load and error

      const onScriptLoad = () => {
        resolve();
      };

      const onScriptError = () => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        cleanup(); // Remove from cachedScripts so that we can try loading again

        delete cachedScripts[src];
        script.remove();
        reject(new Error(`Unable to load script ${src}`));
      };

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('error', onScriptError); // Add script to document body

      document.body.appendChild(script); // Remove event listeners on cleanup

      function cleanup() {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      }
    });
    cachedScripts[src] = promise;
    return promise;
  }
  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Manages the lifecycle of the Google Pay button.
   *
   * Includes lifecycle management of the `PaymentsClient` instance,
   * `isReadyToPay`, `onClick`, `loadPaymentData`, and other callback methods.
   */


  class ButtonManager {
    constructor(options) {
      /**
       * Handles the click event of the Google Pay button.
       *
       * This method would normally be private but has been made public for
       * testing purposes.
       *
       * @private
       */
      this.handleClick = event => __awaiter(this, void 0, void 0, function* () {
        const config = this.config;

        if (!config) {
          throw new Error('google-pay-button: Missing configuration');
        }

        const request = this.createLoadPaymentDataRequest(config);

        try {
          if (config.onClick) {
            config.onClick(event);
          }

          if (event.defaultPrevented) {
            return;
          }

          const result = yield this.client.loadPaymentData(request);

          if (config.onLoadPaymentData) {
            config.onLoadPaymentData(result);
          }
        } catch (err) {
          if (err.statusCode === 'CANCELED') {
            if (config.onCancel) {
              config.onCancel(err);
            }
          } else if (config.onError) {
            config.onError(err);
          } else {
            console.error(err);
          }
        }
      });

      this.options = options;
    }

    getElement() {
      return this.element;
    }

    isGooglePayLoaded() {
      var _a, _b;

      return 'google' in (window || global) && !!((_b = (_a = google === null || google === void 0 ? void 0 : google.payments) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.PaymentsClient);
    }

    mount(element) {
      return __awaiter(this, void 0, void 0, function* () {
        if (!this.isGooglePayLoaded()) {
          yield loadScript('https://pay.google.com/gp/p/js/pay.js');
        }

        this.element = element;

        if (element) {
          this.appendStyles();

          if (this.config) {
            this.updateElement();
          }
        }
      });
    }

    unmount() {
      this.element = undefined;
    }

    configure(newConfig) {
      let promise = undefined;
      this.config = newConfig;

      if (!this.oldInvalidationValues || this.isClientInvalidated(newConfig)) {
        promise = this.updateElement();
      }

      this.oldInvalidationValues = this.getInvalidationValues(newConfig);
      return promise !== null && promise !== void 0 ? promise : Promise.resolve();
    }
    /**
     * Creates client configuration options based on button configuration
     * options.
     *
     * This method would normally be private but has been made public for
     * testing purposes.
     *
     * @private
     */


    createClientOptions(config) {
      const clientConfig = {
        environment: config.environment,
        merchantInfo: this.createMerchantInfo(config)
      };

      if (config.onPaymentDataChanged || config.onPaymentAuthorized) {
        clientConfig.paymentDataCallbacks = {};

        if (config.onPaymentDataChanged) {
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          clientConfig.paymentDataCallbacks.onPaymentDataChanged = paymentData => {
            const result = config.onPaymentDataChanged(paymentData);
            return result || {};
          };
        }

        if (config.onPaymentAuthorized) {
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          clientConfig.paymentDataCallbacks.onPaymentAuthorized = paymentData => {
            const result = config.onPaymentAuthorized(paymentData);
            return result || {};
          };
        }
      }

      return clientConfig;
    }

    createIsReadyToPayRequest(config) {
      const paymentRequest = config.paymentRequest;
      const request = {
        apiVersion: paymentRequest.apiVersion,
        apiVersionMinor: paymentRequest.apiVersionMinor,
        allowedPaymentMethods: paymentRequest.allowedPaymentMethods,
        existingPaymentMethodRequired: config.existingPaymentMethodRequired
      };
      return request;
    }
    /**
     * Constructs `loadPaymentData` request object based on button configuration.
     *
     * It infers request properties like `shippingAddressRequired`,
     * `shippingOptionRequired`, and `billingAddressRequired` if not already set
     * based on the presence of their associated options and parameters. It also
     * infers `callbackIntents` based on the callback methods defined in button
     * configuration.
     *
     * This method would normally be private but has been made public for
     * testing purposes.
     *
     * @private
     */


    createLoadPaymentDataRequest(config) {
      const request = Object.assign(Object.assign({}, config.paymentRequest), {
        merchantInfo: this.createMerchantInfo(config)
      }); // TODO: #13 re-enable inferrence if/when we agree as a team

      return request;
    }

    createMerchantInfo(config) {
      const merchantInfo = Object.assign({}, config.paymentRequest.merchantInfo); // apply softwareInfo if not set

      if (!merchantInfo.softwareInfo) {
        merchantInfo.softwareInfo = {
          id: this.options.softwareInfoId,
          version: this.options.softwareInfoVersion
        };
      }

      return merchantInfo;
    }

    isMounted() {
      return this.element != null && this.element.isConnected !== false;
    }

    removeButton() {
      if (this.element instanceof ShadowRoot || this.element instanceof Element) {
        for (const child of Array.from(this.element.children)) {
          if (child.tagName !== 'STYLE') {
            child.remove();
          }
        }
      }
    }

    updateElement() {
      return __awaiter(this, void 0, void 0, function* () {
        if (!this.isMounted()) return;
        const element = this.getElement();

        if (!this.config) {
          throw new Error('google-pay-button: Missing configuration');
        } // remove existing button


        this.removeButton();
        this.client = new google.payments.api.PaymentsClient(this.createClientOptions(this.config));
        const buttonOptions = {
          buttonType: this.config.buttonType,
          buttonColor: this.config.buttonColor,
          buttonSizeMode: this.config.buttonSizeMode,
          buttonLocale: this.config.buttonLocale,
          onClick: this.handleClick,
          allowedPaymentMethods: this.config.paymentRequest.allowedPaymentMethods
        };
        const rootNode = element.getRootNode();

        if (rootNode instanceof ShadowRoot) {
          buttonOptions.buttonRootNode = rootNode;
        } // pre-create button


        const button = this.client.createButton(buttonOptions);
        this.setClassName(element, [element.className, 'not-ready']);
        element.appendChild(button);
        let showButton = false;
        let readyToPay;

        try {
          readyToPay = yield this.client.isReadyToPay(this.createIsReadyToPayRequest(this.config));
          showButton = readyToPay.result && !this.config.existingPaymentMethodRequired || readyToPay.result && readyToPay.paymentMethodPresent && this.config.existingPaymentMethodRequired || false;
        } catch (err) {
          if (this.config.onError) {
            this.config.onError(err);
          } else {
            console.error(err);
          }
        }

        if (!this.isMounted()) return;

        if (showButton) {
          try {
            this.client.prefetchPaymentData(this.createLoadPaymentDataRequest(this.config));
          } catch (err) {
            console.log('Error with prefetch', err);
          } // remove hidden className


          this.setClassName(element, (element.className || '').split(' ').filter(className => className && className !== 'not-ready'));
        }

        if (this.isReadyToPay !== (readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.result) || this.paymentMethodPresent !== (readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.paymentMethodPresent)) {
          this.isReadyToPay = !!(readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.result);
          this.paymentMethodPresent = readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.paymentMethodPresent;

          if (this.config.onReadyToPayChange) {
            const readyToPayResponse = {
              isButtonVisible: showButton,
              isReadyToPay: this.isReadyToPay
            };

            if (this.paymentMethodPresent) {
              readyToPayResponse.paymentMethodPresent = this.paymentMethodPresent;
            }

            this.config.onReadyToPayChange(readyToPayResponse);
          }
        }
      });
    }

    setClassName(element, classNames) {
      const className = classNames.filter(name => name).join(' ');

      if (className) {
        element.className = className;
      } else {
        element.removeAttribute('class');
      }
    }

    appendStyles() {
      var _a, _b, _c;

      if (typeof document === 'undefined') return;
      const rootNode = (_a = this.element) === null || _a === void 0 ? void 0 : _a.getRootNode();
      const styleId = `default-google-style-${this.options.cssSelector.replace(/[^\w-]+/g, '')}-${(_b = this.config) === null || _b === void 0 ? void 0 : _b.buttonLocale}`; // initialize styles if rendering on the client:

      if (rootNode) {
        if (!((_c = rootNode.getElementById) === null || _c === void 0 ? void 0 : _c.call(rootNode, styleId))) {
          const style = document.createElement('style');
          style.id = styleId;
          style.type = 'text/css';
          style.innerHTML = `
          ${this.options.cssSelector} {
            display: inline-block;
          }
          ${this.options.cssSelector}.not-ready {
            width: 0;
            height: 0;
            overflow: hidden;
          }
        `;

          if (rootNode instanceof Document && rootNode.head) {
            rootNode.head.appendChild(style);
          } else {
            rootNode.appendChild(style);
          }
        }
      }
    }

    isClientInvalidated(newConfig) {
      if (!this.oldInvalidationValues) return true;
      const newValues = this.getInvalidationValues(newConfig);
      return newValues.some((value, index) => value !== this.oldInvalidationValues[index]);
    }

    getInvalidationValues(config) {
      var _a, _b;

      return [config.environment, config.existingPaymentMethodRequired, !!config.onPaymentDataChanged, !!config.onPaymentAuthorized, config.buttonColor, config.buttonType, config.buttonLocale, config.buttonSizeMode, config.paymentRequest.merchantInfo.merchantId, config.paymentRequest.merchantInfo.merchantName, (_a = config.paymentRequest.merchantInfo.softwareInfo) === null || _a === void 0 ? void 0 : _a.id, (_b = config.paymentRequest.merchantInfo.softwareInfo) === null || _b === void 0 ? void 0 : _b.version, config.paymentRequest.allowedPaymentMethods];
    }

  }

  var name = "@google-pay/button-element";
  var version = "3.0.0";
  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Returns a new function that delays invocations to the original function
   * within a specified wait period. The last invocation within this time period
   * gets invoked. All earlier invocations are ignore.
   *
   * @param func The function to invoke.
   * @param wait The time in milliseconds to wait for idle invocations.
   */

  function debounce(func, wait = 0) {
    let timeout;
    return function (...args) {
      window.clearTimeout(timeout);

      const later = function () {
        timeout = undefined;
        return func(...args);
      };

      return new Promise(resolve => {
        timeout = window.setTimeout(() => {
          const result = later();
          resolve(result);
        }, wait);
      });
    };
  }
  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Custom element for the Google Pay button
   */


  class GooglePayButton extends HTMLElement {
    constructor() {
      super(...arguments);
      this.manager = new ButtonManager({
        cssSelector: 'google-pay-button',
        softwareInfoId: name,
        softwareInfoVersion: version
      });
      this.initializeButton = debounce(() => {
        if (!this.assertRequiredProperty('paymentRequest')) {
          return;
        }

        if (!this.assertRequiredProperty('environment')) {
          return;
        }

        const config = {
          paymentRequest: this.paymentRequest,
          environment: this.environment,
          existingPaymentMethodRequired: this.existingPaymentMethodRequired,
          onPaymentDataChanged: this.onPaymentDataChanged,
          onPaymentAuthorized: this.onPaymentAuthorized,
          buttonColor: this.buttonColor,
          buttonType: this.buttonType,
          buttonSizeMode: this.buttonSizeMode,
          buttonLocale: this.buttonLocale,
          onReadyToPayChange: result => {
            if (this.onReadyToPayChange) {
              this.onReadyToPayChange(result);
            }

            this.dispatch('readytopaychange', result);
          },
          onCancel: reason => {
            if (this.onCancel) {
              this.onCancel(reason);
            }

            this.dispatch('cancel', reason);
          },
          onError: error => {
            var _a;

            if (this.onError) {
              (_a = this.onError) === null || _a === void 0 ? void 0 : _a.call(this, error);
            }

            this.dispatchEvent(new ErrorEvent('error', {
              error
            }));
          },
          onLoadPaymentData: paymentData => {
            if (this.onLoadPaymentData) {
              this.onLoadPaymentData(paymentData);
            }

            this.dispatch('loadpaymentdata', paymentData);
          },
          onClick: event => {
            var _a;

            if (this.onClick) {
              (_a = this.onClick) === null || _a === void 0 ? void 0 : _a.call(this, event);
            }
          }
        };
        this.manager.configure(config);
      });
    }

    get isReadyToPay() {
      return this.manager.isReadyToPay;
    }

    assertRequiredProperty(name) {
      const value = this[name];

      if (value === null || value === undefined) {
        this.throwError(Error(`Required property not set: ${name}`));
        return false;
      }

      return true;
    }
    /**
     * Throws an error.
     *
     * Used for testing purposes so that the method can be spied on.
     */


    throwError(error) {
      throw error;
    }

    static get observedAttributes() {
      return GooglePayButton._observedAttributes;
    }
    /**
     * Registers an attribute to be observed.
     *
     * @param name Attribute name to observe.
     * @internal
     */


    addObservedAttribute(name) {
      GooglePayButton._observedAttributes.push(name);
    }

    dispatch(type, detail) {
      this.dispatchEvent(new CustomEvent(type, {
        bubbles: true,
        cancelable: false,
        detail
      }));
    }

    connectedCallback() {
      return __awaiter(this, void 0, void 0, function* () {
        yield this.manager.mount(this);
        return this.initializeButton();
      });
    }

    disconnectedCallback() {
      this.manager.unmount();
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars


    attributeChangedCallback(name) {
      return this.initializeButton();
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars


    notifyPropertyChanged(property) {
      return this.initializeButton();
    }

  }

  _exports.default = GooglePayButton;
  GooglePayButton._observedAttributes = [];

  __decorate([Notify(), Alias('paymentrequest')], GooglePayButton.prototype, "paymentRequest", void 0);

  __decorate([NotifyAttribute()], GooglePayButton.prototype, "environment", void 0);

  __decorate([NotifyBooleanAttribute(), Alias('existingpaymentmethodrequired')], GooglePayButton.prototype, "existingPaymentMethodRequired", void 0);

  __decorate([NotifyAttribute(), Alias('buttoncolor')], GooglePayButton.prototype, "buttonColor", void 0);

  __decorate([NotifyAttribute(), Alias('buttontype')], GooglePayButton.prototype, "buttonType", void 0);

  __decorate([NotifyAttribute(), Alias('buttonsizemode')], GooglePayButton.prototype, "buttonSizeMode", void 0);

  __decorate([NotifyAttribute(), Alias('buttonlocale')], GooglePayButton.prototype, "buttonLocale", void 0);

  __decorate([Notify(), Alias('paymentDataChangedCallback'), Alias('paymentdatachangedcallback'), Alias('onpaymentdatachanged')], GooglePayButton.prototype, "onPaymentDataChanged", void 0);

  __decorate([Notify(), Alias('paymentAuthorizedCallback'), Alias('paymentauthorizedcallback'), Alias('onpaymentauthorized')], GooglePayButton.prototype, "onPaymentAuthorized", void 0);

  __decorate([Alias('readyToPayChangeCallback'), Alias('readytopaychangecallback'), Alias('onreadytopaychange')], GooglePayButton.prototype, "onReadyToPayChange", void 0);

  __decorate([Alias('loadPaymentDataCallback'), Alias('loadpaymentdatacallback'), Alias('onloadpaymentdata')], GooglePayButton.prototype, "onLoadPaymentData", void 0);

  __decorate([Alias('cancelCallback'), Alias('cancelcallback'), Alias('oncancel')], GooglePayButton.prototype, "onCancel", void 0);

  __decorate([Alias('errorCallback'), Alias('errorcallback'), Alias('onerror')], GooglePayButton.prototype, "onError", void 0);

  __decorate([Alias('clickCallback'), Alias('clickcallback'), Alias('onclick')], GooglePayButton.prototype, "onClick", void 0);

  customElements.define('google-pay-button', GooglePayButton);
  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
});