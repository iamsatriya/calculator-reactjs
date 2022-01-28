import './App.css';
import React, { Component } from 'react';
import Calculator from './UI/Calculator';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Calculator stateData={this.state} />
      </div>
    );
  }
}

export default App;
