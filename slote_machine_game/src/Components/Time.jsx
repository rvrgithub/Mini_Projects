import React, { useState } from 'react'

export const Time = () => {
  
let newTime =new Date().toLocaleTimeString();
// when page is refresh then is line update the time....
const [time ,setTime] = useState(newTime);
const UpdateTime =()=>{
   newTime =new Date().toLocaleTimeString();
  // ussing agin newTime for update the on when clicking on button....
  setTime(newTime)
}
setInterval(UpdateTime,1000)
  return (
    <div>

    <h1>{time}</h1>
    {/* <button style={{marginBottom:"30px"}} onClick={UpdateTime}>Get Time</button> */}
    </div>
  )
}
