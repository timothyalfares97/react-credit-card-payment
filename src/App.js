import React, { Component } from 'react'

import Card from './components/Card'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Card Galleries</h1>
        <div className="App-card-container">
          <div className="App-card-row">
            <Card
              bankName='ANZ Bank'
              cardHolder='Andrew White'
              cardNumber='1234 5678 9876 5432'
              issuer='mastercard'
              theme='light'
            />
            <Card
              bankName='ANZ Bank'
              cardHolder='Andrew White'
              cardNumber='1234 5678 9876 5432'
              issuer='mastercard'
              theme='dark'
            />
          </div>
          <div className="App-card-row">
            <Card
              bankName='ME Bank'
              cardHolder='Benny Doe'
              cardNumber='4321 1234 5555 5454'
              issuer='visa'
              theme='light'
            />
            <Card
              bankName='ME Bank'
              cardHolder='Benny Doe'
              cardNumber='4321 1234 5555 5454'
              issuer='visa'
              theme='dark'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
