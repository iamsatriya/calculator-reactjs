import { Component } from 'react';
import './Popup.css';

class Popup extends Component {
  render() {
    return (
      <div className='popup' onClick={() => this.props.popupHandler(false)}>
        <div className='popup-dialog'>
          <p>Oops.. please do calculate first.</p>
          <p>
            Use equal sign (=) button to calculate.
            <br />
            Click anywhere to close this popup.
          </p>
        </div>
      </div>
    );
  }
}

export default Popup;
