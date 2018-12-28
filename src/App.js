import React, { Component } from 'react';
import Board from './Board';
import Cell from './Cell';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      gameOver: false,
      winner: 0
    };
    this.board = new Board();
  }

  // switch players
  nextPlayer = () => {
    return this.state.player === 1 ? 2 : 1;
  };

  // set coordinates on board to player making move
  handleClick = cell => {
    const [x, y] = cell;
    !this.state.gameOver && this.board.movePlayer(x, y, this.state.player, this.playerMove);
  };

  // player move then ai move
  playerMove = () => {
    this.checkWinner();
    this.setState({ player: this.nextPlayer() }, () => {
      setTimeout(this.aiMove, 200); // realistic time between player and ai move
    });
  };

  // ai move to random playable cell
  aiMove = () => {
    const openCells = this.board.getOpenCells();
    if (openCells.length) {
      const [x, y] = openCells[Math.floor(Math.random() * openCells.length)];
      !this.state.gameOver && this.board.movePlayer(x, y, this.state.player, () => {
          this.forceUpdate();
          this.checkWinner();
          this.setState({ player: this.nextPlayer() });
        });
    }
  };

  boardIsFilled = () => {
    return !this.board.getOpenCells()[0];
  };

  // check winner
  checkWinner = () => {
    const { findWinner } = this.board;
    if (findWinner() > 0 || this.boardIsFilled()) {
      this.setState({ gameOver: true, winner: findWinner() });
    }
  };

  reset = () => {
    this.board = new Board();
    this.setState({ player: 1, gameOver: false, winner: 0 });
  };

  // renders x or o
  addClassName = (x, y) => {
    const { getCell } = this.board;
    return getCell(x, y) === 1 ? 'player1' : getCell(x, y) === 2 ? 'player2' : '';
  };

  // show x or o based on who's turn it is
  renderMove = (x, y) => {
    return <div className={this.addClassName(x, y)} />;
  };


  // show cells based on board layout
  renderGrid = () => {
    return this.board.board.map((row, x) => {
      return row.map((cell, y) => {
        const coords = `${x}-${y}`;
        const disabled = cell > 0; // disable clicking if move exists on cell
        return (
          <Cell
            key={coords}
            cell={coords}
            handleClick={this.handleClick}
            disabled={disabled}
          >
            {this.renderMove(x, y)}
          </Cell>
        );
      });
    });
  };

  renderAnnouncement = () => {
    const { winner } = this.state;
    const announcement = !winner && this.boardIsFilled() ? `It's a tie!` : `Player ${winner} has won!`;
    const message = (
      <div className="backdrop">
        <div className="modal-wrapper">
          {announcement} <button onClick={this.reset}>reset</button>
        </div>
      </div>
    );

    return this.state.gameOver ? message : '';
  };

  render = () => {
    return (
      <div className="app">
        {this.renderAnnouncement()}
        <div className="title-container">
          <h2>Tic Tac Toe!</h2>
        </div>
        <div className="grid">{this.renderGrid()}</div>
      </div>
    );
  };
}
