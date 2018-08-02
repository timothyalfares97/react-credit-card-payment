var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import backgroundLight from '../assets/backgroundLight.jpeg';
import backgroundDark from '../assets/backgroundDark.jpeg';
import mastercardLight from '../assets/mastercardLight.png';
import mastercardDark from '../assets/mastercardDark.png';
import visaDark from '../assets/visaDark.png';
import visaLight from '../assets/visaLight.png';
import chip from '../assets/chip.png';
import './Card.css';

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.formatCardNumber = function () {
      return _this.props.cardNumber.match(/.{4}/g).join(' ');
    }, _this.currentTheme = function () {
      var theme = _this.props.theme;


      var currentTheme = null;

      switch (theme) {
        case 'light':
          currentTheme = {
            color: 'black',
            background: 'url(' + backgroundLight + ')'
          };
          break;
        case 'dark':
          currentTheme = {
            color: 'white',
            background: 'url(' + backgroundDark + ')'
          };
          break;
        default:
      }

      return currentTheme;
    }, _this.renderIssuer = function () {
      var _this$props = _this.props,
          issuer = _this$props.issuer,
          theme = _this$props.theme;


      if (issuer === '') {
        return;
      }

      var logo = null;
      var style = null;

      switch (issuer) {
        case 'mastercard':
          logo = theme === 'dark' ? mastercardDark : mastercardLight;
          style = 'Card-mastercard-logo';
          break;
        case 'visa':
          logo = theme === 'dark' ? visaDark : visaLight;
          style = 'Card-visa-logo';
          break;
        default:
      }

      return React.createElement('img', { src: logo, className: style, alt: 'card logo' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          bankName = _props.bankName,
          cardHolder = _props.cardHolder;

      var currentTheme = this.currentTheme();
      return React.createElement(
        'div',
        { className: 'Card-container', style: { backgroundImage: currentTheme.background } },
        React.createElement(
          'div',
          { className: 'Card-bank-name', style: { color: currentTheme.color } },
          bankName
        ),
        React.createElement('img', { src: chip, className: 'Card-chip', alt: 'Chip' }),
        React.createElement(
          'div',
          { className: 'Card-bank-number', style: { color: currentTheme.color } },
          this.formatCardNumber()
        ),
        React.createElement(
          'div',
          { className: 'Card-bottom-row' },
          React.createElement(
            'div',
            { className: 'Card-name-holder', style: { color: currentTheme.color } },
            cardHolder
          ),
          this.renderIssuer()
        )
      );
    }
  }]);

  return Card;
}(Component);

Card.defaultProps = {
  bankName: 'Bank Name',
  cardHolder: 'Card Holder',
  cardNumber: '****************',
  issuer: '',
  theme: 'light'
};
export default Card;