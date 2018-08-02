import React, { Component } from 'react'

import Card from '../src'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Card Galleries</h1>
        <div className="App-card-container">
          <div className="App-card-row">
            <Card
              bankName='ANZ Bank'
              cardHolder='Andrew White'
              cardNumber='1234567898765432'
              issuer='mastercard'
              theme='light'
            />
            <Card
              bankName='ANZ Bank'
              cardHolder='Andrew White'
              cardNumber='1234567898765432'
              issuer='mastercard'
              theme='dark'
            />
          </div>
          <div className="App-card-row">
            <Card
              bankName='ME Bank'
              cardHolder='Benny Doe'
              cardNumber='4321123455555454'
              issuer='visa'
              theme='light'
            />
            <Card
              bankName='ME Bank'
              cardHolder='Benny Doe'
              cardNumber='4321123455555454'
              issuer='visa'
              theme='dark'
            />
          </div>
        </div>
      </div>
    );
  }
}
