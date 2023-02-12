/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import kasLogo from './assets/kasLogo.svg';
import btcLogo from './assets/btcLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kasLogo} className="App-logo" />
        <img src={btcLogo} className="App-logo" />
        <p>
          Get ready to swap.
        </p>
      </header>
    </div>
  );
}

export default App;
