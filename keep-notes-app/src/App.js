import './App.css';
import { Header } from './Components/Header';
import { CreateNotes } from './Components/CreateNotes';
import { Footer } from './Components/Footer';
import { Notes } from './Components/Notes';
import { useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

function App() {
  const [data,setData] =useState([]);
  const addNotes=(notes)=>{
    setData((prev)=>
    [...prev ,notes]);
  }
  console.log("data",data)

  const onDelete=(id)=>{
    console.log("id",id)
    setData((e)=>
    e.filter((cur,ind)=>ind !== id))
  }
  return (
    <div className="App">
<Header/>
<CreateNotes passNotes={addNotes}/>
{/* <Notes/> */}
{data.map((e,index)=>{
  return <SimpleGrid columns={[2, null, 3]}  spacing='40px' key={index}>
  <Notes title={e.title} con={e.content} id={index} DelteItem={onDelete}/>
  </SimpleGrid>
})}
<Footer/>
    </div>
  );
}

export default App;
