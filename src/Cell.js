import React, { Component } from 'react';

const parseIntCoords = cell => {
  return cell.split('-').map(num => parseInt(num));
};

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      cell: this.props.cell
    };
  }

  handleClick = cell => {
    this.refs[this.state.cell].setAttribute('disabled', 'disabled');
    this.setState({ clicked: true }, () => {
      const coords = cell.split('-').map(num => parseInt(num));
      this.props.handleClick(coords);
    });
  };

  renderMove = () => {
    const [x, y] = parseIntCoords(this.state.cell);
    const { getCell } = this.props.board;
    return getCell(x, y) === 1 ? 'x' : getCell(x, y) === 2 ? 'o' : '';
  };

  render = () => {
    const { cell } = this.props;
    return (
      <button
        className={`cell cell-${cell}`}
        onClick={() => this.handleClick(cell)}
        ref={this.state.cell}
      >
        {this.renderMove()}
      </button>
    );
  };
}
