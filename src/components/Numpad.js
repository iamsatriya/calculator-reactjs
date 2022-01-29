import React, { Component } from 'react';
import Button from './Button';
import './Numpad.css';

class Numpad extends Component {
  render() {
    return (
      <div
        className='numpad'
        style={{
          backgroundColor: this.props.theme.nightMode
            ? 'var(--color-grey)'
            : '#FFF',
        }}>
        <Button
          data={{ number: 7 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 8 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 9 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: '+' }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 4 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 5 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 6 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 'x' }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 1 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 2 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 3 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: '-' }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 'c' }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: 0 }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: '=' }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
        <Button
          data={{ number: '+' }}
          theme={{ nightMode: this.props.theme.nightMode }}
        />
      </div>
    );
  }
}

export default Numpad;
