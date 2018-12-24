import React, { Component } from 'react';

export default class Cell extends Component {
  handleClick = cell => {
    const [x, y] = cell.split('-');
    this.props.handleClick([parseInt(x), parseInt(y)]);
  };

  render() {
    const { cell } = this.props;
    return (
      <div
        className={`cell cell-${cell}`}
        onClick={() => this.handleClick(cell)}
      />
    );
  }
}
