React Credit Card Payment
===

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
      cardNumber='1234 5678 9876 5432'
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
