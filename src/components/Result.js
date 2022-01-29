import React, { Component } from 'react';
import NightIcon from '../assets/moon-fill.svg';
import DayIcon from '../assets/sun-fill.svg';
import './Result.css';

class Result extends Component {
  render() {
    return (
      <div
        className='result'
        style={{
          backgroundColor: this.props.theme.nightMode ? '#555B60' : '#FFF',
        }}>
        <div className='result-toggle'>
          <label htmlFor='toggle-checkbox' className='toggle-control'>
            <input
              checked={this.props.theme.nightMode}
              onChange={this.props.handler.changeHandler}
              id='toggle-checkbox'
              type='checkbox'
              className='toggle-checkbox'
            />
            <span
              key={'animationkey ' + this.props.theme.nightMode}
              className='control'
              style={{
                backgroundImage: this.props.theme.nightMode
                  ? `url(${NightIcon})`
                  : `url(${DayIcon})`,
                backgroundPositionX: this.props.theme.nightMode ? '20%' : '80%',
              }}></span>
          </label>
        </div>
        <div>
          <p className='text-right result-operation'>
            {this.props.data.operation}
          </p>
          <p className='text-right result-display'>{this.props.data.result}</p>
        </div>
      </div>
    );
  }
}

export default Result;
