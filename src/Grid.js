import React, { Component } from 'react';
import Cell from './Cell';
import Board from './Board';

export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      player: 1,
      gameOver: false,
      winner: false
    };

    this.board = new Board();
  }

  // next player
  nextPlayer = () => {
    return this.state.player === 1 ? 2 : 1;
  };

  // player turn
  playerMove = () => {
    this.setState({ player: this.nextPlayer() });
  };

  // set coordinates on board to player making move
  handleClick = cell => {
    const [x, y] = cell;
    this.board.movePlayer(x, y, this.state.player, this.aiMove);
    this.playerMove();
  };

  // render cells based on board layout
  renderCells = () => {
    const { board } = this.board;
    return board.map((row, x) => {
      return row.map((_, y) => {
        const coords = `${x}-${y}`;
        return (
          <Cell
            key={coords}
            cell={coords}
            player={this.state.player}
            handleClick={this.handleClick}
            board={this.board}
          />
        );
      });
    });
  };

  render = () => {
    return <div className="grid">{this.renderCells()}</div>;
  };
}
