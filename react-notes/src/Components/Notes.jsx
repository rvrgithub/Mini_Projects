import React from 'react'
import { useState } from 'react'
import { Data } from './NotesData'
import { NotesShow } from './NotesShow'
import styles from "./Notes.module.css"
export const Notes = () => {
    const [data,setData] =useState(Data)
  return (
    <div className={styles.MainDiv}>
        {data.map((el)=>{
            {/* const {id,question ,answer} =el; */}
            return <NotesShow {...el}/>

        })}
    </div>
  )
}
