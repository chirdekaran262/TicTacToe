import './App.css';
import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <>
      <header className="app-header">
        <h1>🎮 Tic Tac Toe</h1>
      </header>
      <div className="app-container">
        <div className="game-board-wrapper">
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
