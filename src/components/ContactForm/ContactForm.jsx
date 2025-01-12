import { MdMessage } from 'react-icons/md'
import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import React from 'react'

export default function ContactForm() {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
        <Button text="VIA Support Chat" icon={MdMessage}/>

        </div>
        

        <div className={styles.contactImage}>

        </div>
    </section>
  )
}
