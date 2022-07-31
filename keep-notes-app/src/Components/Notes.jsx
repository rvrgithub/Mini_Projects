import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
export const Notes = (props) => {
  const handleDelte=()=>{
    props.DelteItem(props.id)
  }
  return (
    <Box margin={"auto"} borderRadius='md' border={"1px solid gray"} px={4} h="autoFit" w="300px" textAlign={"left"}> 
           <Text fontWeight={"bold"}>{props.title}</Text>
        <Text >{props.con}</Text>
        <Button marginLeft={"80%"} borderRadius="50%" onClick={handleDelte}>
      <DeleteIcon/>
        </Button>
        </Box>
  )
}
