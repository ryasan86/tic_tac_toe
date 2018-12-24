import React, { Component } from 'react';

const parseIntCoords = cell => {
  return cell.split('-').map(num => parseInt(num));
};

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = cell => {
    this.refs[this.props.cell].setAttribute('disabled', 'disabled');
    this.setState({ clicked: true }, () => {
      const coords = parseIntCoords(cell);
      this.props.handleClick(coords);
    });
  };

  renderMove = () => {
    const [x, y] = parseIntCoords(this.props.cell);
    const { getCell } = this.props.board;
    return getCell(x, y) === 1 ? 'x' : getCell(x, y) === 2 ? 'o' : '';
  };

  render = () => {
    const { cell } = this.props;
    return (
      <button
        className={`cell cell-${cell}`}
        onClick={() => this.handleClick(cell)}
        ref={this.props.cell}
      >
        {this.renderMove()}
      </button>
    );
  };
}
