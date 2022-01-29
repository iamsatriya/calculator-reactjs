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
          theme={{ nightMode: this.state.nightMode }}
          handler={{ changeHandler: this.toggleNightMode }}
          data={{}}
        />
        <Numpad
          // nightMode={this.state.nightMode}
          theme={{ nightMode: this.state.nightMode }}
          handler={{ changeHandler: this.toggleNightMode }}
          data={{}}
        />
      </div>
    );
  }
}

export default Calculator;
