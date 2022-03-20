import React from 'react';
import './App.css';
import { Counter } from './features/counter/Counter';
import CountDown from './Redux/CountDown';



function App() {
  return (
    <div className="App">
       <h2>Redux centralize application State</h2>
      <CountDown/>
    </div>
  );
}

export default App;
