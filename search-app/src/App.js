import { useState } from 'react';
import './App.css';

function App() {
  const [search ,setSEarch] = useState([])
const handleSearchdate=(event)=>{
let searcValue= event.target.value;
console.log(searcValue)
setSEarch(searcValue)
}
  return (
    <div className="App">
    <h1 >Google</h1>
  <input type="text" placeholder='Search here' value={search} onChange={handleSearchdate}></input>
    </div>
  );
}

export default App;
