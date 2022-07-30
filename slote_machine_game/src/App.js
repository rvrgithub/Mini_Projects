import './App.css';
import { SloteM } from './Components/SloteM';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h2 style={{color:"#fedfe7"}}>This is <span style={{color:"#dc3545"}}>slote Machine</span> Game</h2>
  <div className='border'>
      <SloteM x= "😄" y = "😸" z= "🍎"/>
      <hr/>
      <SloteM x= "😄" y ="😄" z= "😄"/>
      <hr/>
      <SloteM x= "😄" y = "😸" z= "🍌"/>
      <hr/>
      <SloteM x= "🍌" y = "😸" z= "🍎"/>
      <hr/>

  </div>
      </header>
    </div>
  );
}

export default App;
