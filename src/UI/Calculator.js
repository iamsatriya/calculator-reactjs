import React, { Component } from 'react';
import Numpad from '../components/Numpad';
import Result from '../components/Result';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      nightMode: true,
      data: { operation: '0', result: '0' },
    };
  }
  toggleNightMode = () => {
    this.setState({
      nightMode: !this.state.nightMode,
    });
  };
  operatorHandler = (val) => {
    if (val === 'c') {
      this.setState({
        data: {
          operation: '0',
          result: '0',
        },
      });
    } else {
      const lastOperationChar =
        this.state.data.operation[this.state.data.operation.length - 1];
      if (
        lastOperationChar === '-' ||
        lastOperationChar === '/' ||
        lastOperationChar === 'x' ||
        lastOperationChar === ''
      ) {
        const lastIndex = this.state.data.operation.length - 1;
        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            operation: prevState.data.operation.slice(0, lastIndex) + val,
          },
        }));
      } else {
        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            operation: prevState.data.operation + val,
          },
        }));
      }
    }
  };
  numberHandler = (val) => {
    if (this.state.data.operation === '0') {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          operation: val,
        },
      }));
    } else {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          operation: prevState.data.operation + String(val),
        },
      }));
    }
  };
  calculateHandler = () => {
    const operatorIndex = this.state.data.operation.search(/[x/\-+]/);
    const number1 = this.state.data.operation.slice(0, operatorIndex);
    const number2 = this.state.data.operation.slice(
      operatorIndex + 1,
      this.state.data.operation.length,
    );
    let result = 0;
    if (operatorIndex === -1 || number1 === '' || number2 === '') result = ':)';
    else
      switch (this.state.data.operation[operatorIndex]) {
        case '+':
          result = parseInt(number1) + parseInt(number2);
          break;
        case '-':
          result = parseInt(number1) - parseInt(number2);
          break;
        case '/':
          result = parseInt(number1) / parseInt(number2);
          break;
        case 'x':
          result = parseInt(number1) * parseInt(number2);
          break;
        default:
          result = ':)';
      }
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        result,
      },
    }));
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
          theme={{ nightMode: this.state.nightMode }}
          handler={{
            operatorHandler: this.operatorHandler,
            numberHandler: this.numberHandler,
            calculateHandler: this.calculateHandler,
          }}
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
