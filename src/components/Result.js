import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render() {
    return (
      <div className='result'>
        <div className='result-toggle'>nightmode</div>
        <div>
          <p className='text-right result-operation'>operation</p>
          <p className='text-right result-display'>Result</p>
        </div>
      </div>
    );
  }
}

export default Result;
