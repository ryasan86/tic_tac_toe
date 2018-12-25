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
  
  // switch players
  nextPlayer = () => {
    return this.state.player === 1 ? 2 : 1;
  };

  // player move
  playerMove = () => {
    this.setState({ player: this.nextPlayer() }, this.aiMove);
  };

  // ai move after player makes a move
  aiMove = () => {
    const openCells = this.board.getOpenCells();
    // make sure there are open cells before placing a move
    if (openCells[0]) {
      const [x, y] = openCells[Math.floor(Math.random() * openCells.length)];
      this.board.movePlayer(x, y, this.state.player, this.forceUpdate.bind(this)); // board rerender after ai move

    }
  }

  // set coordinates on board to player making move
  handleClick = cell => {
    const [x, y] = cell;
    this.board.movePlayer(x, y, this.state.player, this.playerMove);
  };

    // render x or o based on who's turn it is
    renderMove = (x, y) => {
      const { getCell } = this.board;
      return <div className={getCell(x, y) === 1 ? 'player1' : getCell(x, y) === 2 ? 'player2' : ''} />;
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
            handleClick={this.handleClick}
          >{this.renderMove(x, y)}</Cell>
        );
      });
    });
  };

  render = () => {
    return <div className="grid">{this.renderCells()}</div>;
  };
}
