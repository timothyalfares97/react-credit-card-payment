import React, { Component } from 'react'
import './Card.css'
import logo from '../assets/mastercard.png'
import chip from '../assets/chip.png'

class Card extends Component {
  render() {
    return (
      <div className="Card-container">
        <div className="Card-bank-name">Bank Name</div>
        <img src={chip} className="Card-chip"/>
        <div className="Card-bank-number">1234 5678 9876 5432</div>
        <div className="Card-bottom-row">
          <div className="Card-name-holder">Benjamin Johnston</div>
          <img src={logo} className="Card-logo"/>
        </div>
      </div>
    )
  }
}

export default Card;
