import React, { Component } from 'react'
import './Card.css'
import backgroundLight from '../assets/backgroundLight.jpeg'
import backgroundDark from '../assets/backgroundDark.jpeg'
import mastercardLight from '../assets/mastercardLight.png'
import mastercardDark from '../assets/mastercardDark.png'
import visaDark from '../assets/visaDark.png'
import visaLight from '../assets/visaLight.png'
import chip from '../assets/chip.png'

export default class Card extends Component {

  static defaultProps = {
    bankName: 'Bank Name',
    cardHolder: 'Andrew Smith',
    cardNumber: '**** **** **** ****',
    issuer: '',
    theme: 'light',
  }

  currentTheme = () => {
    const { theme } = this.props

    let currentTheme = null

    switch(theme) {
      case 'light':
        currentTheme = {
          color: 'black',
          background: `url(${backgroundLight})`,
        }
        break
      case 'dark':
        currentTheme = {
          color: 'white',
          background: `url(${backgroundDark})`,
        }
        break
    }

    return currentTheme
  }

  renderIssuer = () => {
    const { issuer, theme } = this.props
    
    if (issuer === '') {
      return
    }

    let logo = null
    let style = null

    switch(issuer) {
      case 'mastercard':
        logo = theme === 'dark' ? mastercardDark : mastercardLight
        style = 'Card-mastercard-logo'
        break
      case 'visa':
        logo = theme === 'dark' ? visaDark : visaLight
        style = 'Card-visa-logo'
        break
    }

    return <img src={logo} className={style}/>
  }

  render() {
    const { bankName, cardHolder, cardNumber } = this.props
    const currentTheme = this.currentTheme()
    return (
      <div className="Card-container" style={{ backgroundImage: currentTheme.background }}>
        <div className="Card-bank-name" style={{color: currentTheme.color}}>
          {bankName}
        </div>
        <img src={chip} className="Card-chip"/>
        <div className="Card-bank-number" style={{color: currentTheme.color}}>
          {cardNumber}
        </div>
        <div className="Card-bottom-row">
          <div className="Card-name-holder" style={{color: currentTheme.color}}>
            {cardHolder}
          </div>
          {this.renderIssuer()}
        </div>
      </div>
    )
  }
}
