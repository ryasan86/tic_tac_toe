import React, { Component } from 'react';
import './Cell.scss';

export default class Cell extends Component {
  render() {
    return <div className={`cell cell-${this.props.coords}`} />;
  }
}
