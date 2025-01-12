import React from 'react'
import { MdMessage } from 'react-icons/md'
import styles from './Button.module.css'

export default function Button(props) {

    const {isOutline, text, icon, ...rest}=props
  return (
    <button {...rest} className={isOutline ? styles.outline_btn:styles.primary_btn}>
       
           
            {icon}     
            {text}   
    </button>
  )
}
