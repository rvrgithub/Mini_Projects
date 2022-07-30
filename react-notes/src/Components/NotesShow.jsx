import React from 'react'
import { useState } from 'react'
import styles from "./Notes.module.css";
export const NotesShow = (data) => {
const [value ,setValue] =useState(false);
    return (
    <div>
    <div className={styles.Flex}> <h2 className={styles.Tag} onClick={()=>setValue(prev => !prev)}>{value ? "➖ " : "➕" }  </h2>
        <h1>{data.question}</h1></div>
      {value ?<p className={styles.P}>{data.answers}</p> : ""}
    </div>
  )
}
