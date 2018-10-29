React Credit Card Payment
===

React Credit Card Payment is a credit card component for React application that is customizable based on the value and theme.

![alt text](https://raw.githubusercontent.com/dotaemon99/react-credit-card-payment/master/media/demo.png)

### Install
```
npm install --save react-credit-card-payment
```

### Usage

```jsx
    import Card from 'react-credit-card-payment'
    ...

    <Card
      bankName='ANZ Bank'
      cardHolder='Andrew White'
      cardNumber='1234567898765432'
      issuer='mastercard'
      theme='light'
    />
```

## Props

- `bankName`(string): Bank or institution name for the card. Default value is 'Bank Name' 
- `cardHolder` (string): Card holder name. Default value is 'Card Holder'
- `cardNumber` (string): Card number for the card. Default value is '**** **** **** ****'
- `issuer` (string): Set the issuer for the card. Default value is empty. (valid value: 'mastercard' | 'visa')
- `theme` (string): Theme of the card. Default value is 'light'. (valid value: 'light' | 'dark')

Copyright Timothy Alfares 2018
