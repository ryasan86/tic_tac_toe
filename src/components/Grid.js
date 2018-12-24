import React, { Component } from 'react';
import Cell from './Cell';

export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      player: 1,
      gameOver: false,
      winner: false
    };
  }

  nextPlayer = () => {
    this.setState({ player: this.state.player === 1 ? 2 : 1 });
  };

  createBoard = () => {
    let board = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(<Cell key={`${i}${j}`} coords={`${i}-${j}`} />);
      }
      board.push(row);
    }

    return board;
  };

  createGrid = () => {};

  render = () => {
    return <div>{this.createBoard()}</div>;
  };
}
