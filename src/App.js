import './App.css';
import React, { Component } from 'react';
import Calculator from './UI/Calculator';
import Popup from './components/Popup';

class App extends Component {
  constructor() {
    super();
    this.state = { isPopupDisplayed: false };
  }
  setDisplayHandler = (isPopupDisplayed) => {
    this.setState({
      isPopupDisplayed,
    });
  };
  render() {
    return (
      <div style={{ position: 'relative' }}>
        {this.state.isPopupDisplayed ? (
          <Popup popupHandler={this.setDisplayHandler} />
        ) : (
          <></>
        )}
        <div className='app'>
          <Calculator
            stateData={this.state}
            popupHandler={this.setDisplayHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
