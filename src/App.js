import React, { Component } from 'react'

import Card from './components/Card'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-card-container">
          <Card/>
        </div>
      </div>
    );
  }
}

export default App;
