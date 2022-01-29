import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  renderNight = () => {
    return (
      'night ' +
      (typeof this.props.data.number === 'string'
        ? 'operator-night'
        : 'nonoperator-night')
    );
  };
  renderDay = () => {
    return (
      'day ' +
      (typeof this.props.data.number === 'string'
        ? 'operator-day'
        : 'nonoperator-day')
    );
  };

  render() {
    return (
      <div className='button'>
        <button
          onClick={() =>
            this.props.handler.clickHandler(this.props.data.number)
          }
          className={
            this.props.theme.nightMode ? this.renderNight() : this.renderDay()
          }>
          {this.props.data.number}
        </button>
      </div>
    );
  }
}

export default Button;
