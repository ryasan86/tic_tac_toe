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

  nextPlayer = () => {
    this.setState({ player: this.state.player === 1 ? 2 : 1 });
  };

  // playerMove = (x, y, player) => {

  // }

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
      return row.map((_, y) => {
        const coords = `${x}-${y}`;
        return (
          <Cell
            key={coords}
            cell={coords}
            player={this.state.player}
            nextPlayer={this.nextPlayer}
          />
        );
      });
    });
  };

  render() {
    return <div className="grid">{this.renderCells()}</div>;
  }
}
