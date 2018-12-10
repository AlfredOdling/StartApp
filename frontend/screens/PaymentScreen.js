import React, { Component } from 'react'
import { View, WebView } from 'react-native'

export default class PaymentScreen extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{
          html:
            '<div>' +
            '<form action="your-server-side-code" method="POST">' +
            '<script' +
            'src="https://checkout.stripe.com/checkout.js"' +
            'className="stripe-button"' +
            'data-key="pk_test_CSZHbJ1tT690tYdstrqUYEtr"' +
            'data-amount="999"' +
            'data-name="Alfredodling"' +
            'data-description="Example charge"' +
            'data-image="https://stripe.com/img/documentation/checkout/marketplace.png"' +
            'data-locale="auto"' +
            'data-currency="sek"/>' +
            '</form>' +
            '</div>',
        }}
      />
    )
  }
}
