import React, { Component } from 'react';

const parseIntCoords = cell => {
  return cell.split('-').map(num => parseInt(num));
};

export default class Cell extends Component {
  // disable clicking on cell after player has moved
  handleClick = cell => {
    this.setState({ disabled: true }, () => {
      const coords = parseIntCoords(cell);
      this.props.handleClick(coords);
    });
  };

  render = () => {
    const { cell, disabled } = this.props;
    return (
      <button
        className={`cell cell-${cell} ${this.props.disabled ? 'disabled' : ''}`}
        onClick={() => this.handleClick(cell)}
        disabled={disabled}
      >
        {this.props.children}
      </button>
    );
  };
}
