import React from 'react';
import GH_ICON from './github.svg';

const Icon = () => (
  <div className="icon-container">
    <a href="https://github.com/ryasan86/tic_tac_toe">
      <img src={GH_ICON} alt="github" className="icon" />
    </a>
  </div>
);

export default Icon;
