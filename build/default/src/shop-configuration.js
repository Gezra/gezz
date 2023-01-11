define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getGooglePayConfig = getGooglePayConfig;

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  const shippingOptions = [{
    id: 'free',
    label: 'Free shipping',
    description: 'Arrives in 5 to 7 days',
    price: 0
  }, {
    id: 'express',
    label: 'Express shipping',
    description: '$5.00 - Arrives in 1 to 3 days',
    price: 5
  }];
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [{
      type: 'CARD',
      parameters: {
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        allowedCardNetworks: ['MASTERCARD', 'VISA']
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'example',
          gatewayId: '1234567890'
        }
      }
    }],
    merchantInfo: {
      merchantId: '17613812255336763067',
      merchantName: 'Gezmo,Inc.'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '0',
      currencyCode: 'USD',
      countryCode: 'US'
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION', 'SHIPPING_OPTION'],
    shippingAddressRequired: true,
    shippingOptionRequired: true,
    shippingOptionParameters: {
      defaultSelectedOptionId: shippingOptions[0].id,
      shippingOptions: shippingOptions.map(o => ({
        id: o.id,
        label: o.label,
        description: o.description
      }))
    }
  };

  function buildGooglePayPaymentRequest(displayItems, shippingOption) {
    const opt = shippingOption || shippingOptions[0];
    const items = [...displayItems, {
      label: opt.label,
      price: opt.price.toFixed(2),
      type: 'SHIPPING_OPTION'
    }];
    return _objectSpread({}, paymentRequest, {
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        currencyCode: 'USD',
        countryCode: 'US',
        displayItems: items,
        totalPrice: items.reduce((total, item) => total + Number(item.price), 0).toFixed(2)
      }
    });
  }

  const config = {
    googlepay: {
      environment: 'TEST',
      existingPaymentMethodRequired: false,
      appearance: {
        buttonColor: 'default',
        buttonType: 'long'
      },
      paymentRequest,
      shippingOptions,
      onLoadPaymentData: function (paymentResponse, context) {
        console.log('Success', paymentResponse);
        this.dispatchEvent(new CustomEvent('payment-selected', {
          bubbles: true,
          composed: true,
          detail: {
            paymentResponse,
            context: typeof context === 'function' ? context() : context
          }
        }));
      },
      onPaymentAuthorized: function () {
        return {
          transactionState: 'SUCCESS'
        };
      },
      buildPaymentRequest: buildGooglePayPaymentRequest
    }
  };

  function getGooglePayConfig() {
    return _objectSpread({}, config.googlepay);
  }
});