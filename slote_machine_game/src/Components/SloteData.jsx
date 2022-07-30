import React from 'react'
import { SloteM } from './SloteM'

export const SloteData = () => {
  return (
    <div>  <h2 style={{color:"#fedfe7"}}>This is <span style={{color:"#dc3545"}}>slote Machine</span> Game</h2>
    <div className='border'>
        <SloteM x= "😄" y = "😸" z= "🍎"/>
        <hr/>
        <SloteM x= "😄" y ="😄" z= "😄"/>
        <hr/>
        <SloteM x= "😄" y = "😸" z= "🍌"/>
        <hr/>
        <SloteM x= "🍌" y = "😸" z= "🍎"/>
        <hr/>
  
    </div></div>
  )
}
