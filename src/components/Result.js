import React, { Component } from 'react';
import NightIcon from '../assets/moon-fill.svg';
import DayIcon from '../assets/sun-fill.svg';
import './Result.css';

class Result extends Component {
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
      <div className='result'>
        <div className='result-toggle'>
          <label htmlFor='toggle-checkbox' className='toggle-control'>
            <input
              checked={this.state.nightMode}
              onChange={this.toggleNightMode}
              id='toggle-checkbox'
              type='checkbox'
              className='toggle-checkbox'
            />
            <span
              className='control'
              style={{
                backgroundImage: this.state.nightMode
                  ? `url(${NightIcon})`
                  : `url(${DayIcon})`,
                backgroundPositionX: this.state.nightMode ? '20%' : '80%',
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
