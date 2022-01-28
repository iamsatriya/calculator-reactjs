import React, { Component } from 'react';
import Numpad from '../components/Numpad';
import Result from '../components/Result';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className='calculator'>
        <Result />
        <Numpad />
      </div>
    );
  }
}

export default Calculator;
