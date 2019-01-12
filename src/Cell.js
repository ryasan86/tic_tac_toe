import React, { Component } from 'react';

class Cell extends Component {
  // disable clicking on cell after player has moved
  handleClick = cell => {
    this.setState({ disabled: true }, () => {
      const coords = cell.split('-').map(num => parseInt(num));
      this.props.handleClick(coords);
    });
  };

  render = () => {
    const { cell, disabled, children } = this.props;
    return (
      <button
        className={`cell cell-${cell} ${this.props.disabled ? 'disabled' : ''}`}
        onClick={() => this.handleClick(cell)}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
}

export default Cell;