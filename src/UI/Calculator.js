import React, { Component } from 'react';
import Numpad from '../components/Numpad';
import Result from '../components/Result';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = { nightMode: true };
  }
  toggleNightMode = () => {
    this.setState({
      nightMode: !this.state.nightMode,
    });
  };
  render() {
    return (
      <div className='calculator'>
        <Result
          changeHandler={this.toggleNightMode}
          nightMode={this.state.nightMode}
        />
        <Numpad />
      </div>
    );
  }
}

export default Calculator;
