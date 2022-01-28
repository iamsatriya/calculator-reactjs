import React, { Component } from 'react';
import NightIcon from '../assets/moon-fill.svg';
import DayIcon from '../assets/sun-fill.svg';
import './Result.css';

class Result extends Component {
  render() {
    return (
      <div className='result'>
        <div className='result-toggle'>
          <label htmlFor='toggle-checkbox' className='toggle-control'>
            <input
              checked={this.props.nightMode}
              onChange={this.props.changeHandler}
              id='toggle-checkbox'
              type='checkbox'
              className='toggle-checkbox'
            />
            <span
              className='control'
              style={{
                backgroundImage: this.props.nightMode
                  ? `url(${NightIcon})`
                  : `url(${DayIcon})`,
                backgroundPositionX: this.props.nightMode ? '20%' : '80%',
              }}>
              {/* <img src={NightIcon} alt='N' /> */}
            </span>
          </label>
        </div>
        <div>
          <p className='text-right result-operation'>operation</p>
          <p className='text-right result-display'>Result</p>
        </div>
      </div>
    );
  }
}

export default Result;
