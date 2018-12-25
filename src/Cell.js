import React, { Component } from 'react';

const parseIntCoords = cell => {
  return cell.split('-').map(num => parseInt(num));
};

export default class Cell extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  // disable clicking on cell after player has moved
  handleClick = cell => {
    this.setState({ disabled: true }, () => {
      const coords = parseIntCoords(cell);
      this.props.handleClick(coords);
    });
  };

  // render x or o based on who's turn it is
  renderMove = () => {
    const [x, y] = parseIntCoords(this.props.cell);
    const { getCell } = this.props.board;
    return <div className={getCell(x, y) === 1 ? 'player1' : getCell(x, y) === 2 ? 'player2' : ''} />;
  };

  render = () => {
    const { cell } = this.props;
    return (
      <button
        className={`cell cell-${cell} ${this.state.disabled ? 'disabled' : ''}`}
        onClick={() =>  this.handleClick(cell)}
        disabled={this.state.disabled}
      >
        {this.renderMove()}
      </button>
    );
  };
}
