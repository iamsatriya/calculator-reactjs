import React, { Component } from 'react';
import Numpad from '../components/Numpad';
import Result from '../components/Result';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      nightMode: true,
      data: { operation: '', result: 0 },
    };
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
          theme={{ nightMode: this.state.nightMode }}
          handler={{ changeHandler: this.toggleNightMode }}
          data={{
            operation: this.state.data.operation,
            result: this.state.data.result,
          }}
        />
        <Numpad
          // nightMode={this.state.nightMode}
          theme={{ nightMode: this.state.nightMode }}
          handler={{ changeHandler: this.toggleNightMode }}
          data={{
            operation: this.state.data.operation,
            result: this.state.data.result,
          }}
        />
      </div>
    );
  }
}

export default Calculator;
