import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="title">Tic Tac Toe</div>
        <div className="grid">
          <div className="cell">cell</div>
          <div className="cell">cell</div>
          <div className="cell">cell</div>
          <div className="cell">cell</div>
          <div className="cell">cell</div>
          <div className="cell">cell</div>
          <div className="cell">cell</div>
          <div className="cell">cell</div>
          <div className="cell">cell</div>
        </div>
      </div>
    );
  }
}

export default App;
