import React, { Component } from 'react';
import Cell from './Cell';

export default class Grid extends Component {
  renderCells = () => {
    const board = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(<Cell key={`${i}-${j}`} cell={`${i}-${j}`} />);
      }
      board.push(row);
    }
    return board;
  };

  render() {
    return (
      <div className="grid-container">
        <div />
        <div className="grid">{this.renderCells()}</div>
      </div>
    );
  }
}
