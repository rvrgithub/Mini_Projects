import { useState } from 'react';
import './App.css';
import { SloteData } from './Components/SloteData';
import { Time } from './Components/Time';

function App() {
  const [value,setValue] =useState(false);

  return (
    <div className="App">
      <header className="App-header">
      {value? <SloteData/> :<Time/> }
      <button onClick={()=>setValue(prev=>!prev)}> {value ? "Let's check Time" : "Play Game"}</button>
      </header>
    </div>
  );
}

export default App;
