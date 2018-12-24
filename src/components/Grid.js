import React, { Component } from 'react';
import Cell from './Cell';

export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      player: 1,
      gameOver: false,
      winner: false,
      board: this.createBoard()
    };
  }

  nextPlayer = () => {};

  createBoard = () => {
    const board = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(0);
      }
      board.push(row);
    }
    return board;
  };

  renderCells = () => {
    return this.state.board.map((row, x) => {
      return row.map((_, y) => <Cell key={`${x}-${y}`} cell={`${x}-${y}`} />);
    });
  };

  render() {
    return (
      <div className="grid-container">
        <div className="grid">{this.renderCells()}</div>
        <button onClick={() => console.log(this.state)}>test</button>
      </div>
    );
  }
}
