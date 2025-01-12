import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'


import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import React from 'react'

export default function ContactForm() {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage font-size="24px"/>}/>
          <Button text="VIA CALL" icon={<FaPhoneAlt font-size="24px"/>}/>

          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail font-size="24px"/>}/>
          <form>
           <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
           </div>
           <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email"/>
           </div>
           <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea rows="8" type="text" name="text"/>
           </div>
           <Button  text="SUBMIT" />



          </form>
        
        </div>
        

        <div className={styles.contactImage}>
          <img src="/Images/Service 24_7-pana 1 (1).png" alt="" />
        </div>
    </section>
  )
}
