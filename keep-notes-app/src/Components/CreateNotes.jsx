import React, { useState } from 'react'
import {  AddIcon } from '@chakra-ui/icons'
import { Box, Button, Input, Textarea } from '@chakra-ui/react';
export const CreateNotes = (props) => {
  const [notes ,setNotes] = useState({
    title:"",
    content:"",
  });
  const handleChange =(event)=>{
   const  {name ,value} = event.target;
   setNotes({ 
          ...notes,
       [name]:value
  })
    // console.log("notes",notes)

  }
  const addEvent =(e)=>{
       e.preventDefault();
props.passNotes(notes);
setNotes({
  title:"",
  content:"",
})
  }
  return (
    <Box margin={"auto"} borderRadius='md' border={"1px solid gray"} px={4} h={"130px"} w="300px">
        <form>
            <Input placeholder="Title"
                type="text"
                name= "title"
                value={notes.title}
                onChange={handleChange}
                autoComplete='off'
                w="100%"
                border="none"
            />
          
            <Textarea w="100%" border="none" placeholder='write a Notes'
            name="content"
            value={notes.content}
            onChange={handleChange} />
            <Button marginLeft={"80%"} borderRadius="50%" onClick={addEvent}> <AddIcon/></Button>
        </form>
    </Box>
  )
}
