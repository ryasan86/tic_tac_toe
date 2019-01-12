import React from 'react';
import GH_ICON from './github.svg';

const AppBar = () => (
  <div className="app-bar">
    <a href="https://github.com/ryasan86/tic_tac_toe">
      <img src={GH_ICON} alt="github" className="icon" />
    </a>
  </div>
);

export default AppBar;
