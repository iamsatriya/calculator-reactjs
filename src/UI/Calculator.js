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
      calculated: false,
    };
  }
  isOperator = (lastChar) => {
    return (
      lastChar === '+' ||
      lastChar === '-' ||
      lastChar === '/' ||
      lastChar === 'x'
    );
  };
  getOperatorIndex = () => {
    let foundIndex = this.state.data.operation.slice(1).search(/[x/\-+]/);
    foundIndex = foundIndex + (foundIndex === -1 ? 0 : 1);
    return foundIndex;
  };
  toggleNightMode = () => {
    this.setState({
      nightMode: !this.state.nightMode,
    });
  };
  clearHandler = () => {
    this.setState({
      data: {
        operation: '0',
        result: '0',
      },
      calculated: false,
    });
  };
  operatorHandler = (val) => {
    const lastChar =
      this.state.data.operation[this.state.data.operation.length - 1];
    if (
      this.getOperatorIndex() !== -1 &&
      !this.isOperator(lastChar) &&
      !this.state.calculated
    ) {
      this.props.popupHandler(true);
      return;
    }
    if (this.isOperator(lastChar)) {
      const lastIndex = this.state.data.operation.length - 1;
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          operation: prevState.data.operation.slice(0, lastIndex) + val,
        },
        calculated: false,
      }));
    } else {
      if (this.state.calculated) {
        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            operation: prevState.data.result + val,
          },
          calculated: false,
        }));
      } else {
        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            operation: prevState.data.operation + val,
          },
          calculated: false,
        }));
      }
    }
  };
  numberHandler = (val) => {
    const lastIndex = this.state.data.operation.length - 1;
    if (
      this.state.calculated &&
      !this.isOperator(this.state.data.operation[lastIndex])
    ) {
      this.setState({
        data: {
          operation: val,
          result: '0',
        },
        calculated: false,
      });
    } else {
      if (this.state.data.operation[lastIndex] === '0') {
        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            operation: prevState.data.operation.slice(0, lastIndex) + val,
          },
          calculated: false,
        }));
      } else {
        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            operation: prevState.data.operation + String(val),
          },
          calculated: false,
        }));
      }
    }
  };
  calculateHandler = () => {
    const errorMsg = ':)';
    const operatorIndex = this.getOperatorIndex();
    const number1 = this.state.data.operation.slice(0, operatorIndex);
    const number2 = this.state.data.operation.slice(
      operatorIndex + 1,
      this.state.data.operation.length,
    );
    let result = 0;
    if (operatorIndex === -1 || number1 === '' || number2 === '')
      result = errorMsg;
    else
      switch (this.state.data.operation[operatorIndex]) {
        case '+':
          result = Number(number1) + Number(number2);
          break;
        case '-':
          result = Number(number1) - Number(number2);
          break;
        case '/':
          result = Number(number1) / Number(number2);
          result = result === Infinity ? errorMsg : result;
          break;
        case 'x':
          result = Number(number1) * Number(number2);
          break;
        default:
          result = errorMsg;
      }
    if (result !== errorMsg && result % 1 !== 0) result = result.toFixed(2);
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        result,
      },
      calculated: true,
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
            clearHandler: this.clearHandler,
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
