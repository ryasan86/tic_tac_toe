import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      cell: this.props.cell
    };
  }

  handleClick = cell => {
    this.refs[`${this.state.cell}`].setAttribute('disabled', 'disabled');
    this.setState({ clicked: true }, () => {
      const [x, y] = cell.split('-').map(num => parseInt(num));
      this.props.handleClick([x, y]);
      console.log(this.props.board.checkCell(x, y));
    });
  };

  render() {
    const { cell } = this.props;
    return (
      <button
        className={`cell cell-${cell}`}
        onClick={() => this.handleClick(cell)}
        ref={this.state.cell}
      />
    );
  }
}
