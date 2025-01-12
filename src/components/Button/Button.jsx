import React from 'react'
import { MdMessage } from 'react-icons/md'
import styles from './Button.module.css'

export default function Button(props) {
    console.log(props)
  return (
    <button className={styles.primary_btn}>
        <MdMessage font-size="24px"/>
        VIA Support Chat
    </button>
  )
}
