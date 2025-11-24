import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './Game/board.jsx';
import Square from './Game/Square.jsx';

function App () {
  return (
    <div className='App'>
      <Board />
    </div>
  );
};

export default App;