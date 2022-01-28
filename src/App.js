import './App.css';
import React, { Component } from 'react';
import Calculator from './UI/Calculator';

class App extends Component {
  constructor() {
    super();
    this.state = { nightMode: false };
  }
  render() {
    return (
      <div
        className={'app ' + (this.state.nightMode ? 'app-night' : 'app-day')}>
        <Calculator />
      </div>
    );
  }
}

export default App;
