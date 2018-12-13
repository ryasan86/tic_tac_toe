import React, { Component } from 'react';
import Grid from './components/Grid';
import './App.scss';

const Title = () => {
  return (
    <div className="title-container">
      <h2>Tic Tac Toe</h2>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <Title />
        <Grid />
      </div>
    );
  }
}

export default App;
