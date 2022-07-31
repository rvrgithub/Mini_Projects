import { Flex } from '@chakra-ui/react'
import React from 'react'
import styles from "./Notes.module.css"
export const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <Flex className={styles.Footer}>
    <h3> Copyright <img src="https://w7.pngwing.com/pngs/968/453/png-transparent-black-letter-c-logo-illustration-copyright-symbol-intellectual-property-copyright-infringement-copyright-words-phrases-united-states-copyright.png"/>  {year} </h3>
    </Flex>
  )
}
