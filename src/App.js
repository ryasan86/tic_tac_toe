import React, { Component } from 'react';
import Grid from './Grid';
import './App.scss';

const Title = () => {
  return (
    <div className="title-container">
      <h2>Tic Tac Toe!</h2>
    </div>
  );
};

class App extends Component {
  componentDidMount() {
    document.title = 'Tic Tac Toe!';
  }

  render = () => {
    return (
      <div className="app">
        <Title />
        <Grid />
      </div>
    );
  };
}

export default App;
