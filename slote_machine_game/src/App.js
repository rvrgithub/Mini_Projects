import { useState } from 'react';
import './App.css';
import { SloteData } from './Components/SloteData';
import { Time } from './Components/Time';

function App() {
  const [value,setValue] =useState(false);
  const bg= "#282c34"
  const t ="light"
  const [color , setColor] =useState(bg)
  const [text ,setText] = useState(t)
const handleChangeColor=()=>{
  let green ="#b3d4ff"
  let nt = "Dark"
  setColor(green)
  setText(nt)
}
const handleCgangeColorAgin=()=>{
  setText(t)
  setColor(bg)
}
  return (
    <div className="App">
      <button className="btn" onMouseEnter={handleChangeColor} onMouseLeave={handleCgangeColorAgin}> {text}</button>
      <header  className="App-header" style={{backgroundColor:color}} >
      {value? <SloteData/> :<Time/> }
      <button className="button" onClick={()=>setValue(prev=>!prev)}> {value ? "Let's check Time" : "Play Game"}</button>
      </header>
    </div>
  );
}

export default App;
