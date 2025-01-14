import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import React from 'react'
import {useState} from 'react';


export default function ContactForm() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [text,setText]=useState("");
  


  const onViaCAllSubmit=()=>{
    console.log("From Call");
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log("name",event.target[0].value);
    console.log("email",event.target[1].value);
    console.log("text",event.target[1].value);

  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage font-size="24px"/>}/>
          <Button  onClick={onViaCAllSubmit} text="VIA CALL" icon={<FaPhoneAlt font-size="24px"/>} />

          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail font-size="24px"/>}/>
          <form onSubmit={onSubmit}>
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
           <div>
            {name+" "+email+" "+text}
           </div>


          </form>
        
        </div>
        

        <div className={styles.contactImage}>
          <img src="/Images/Service 24_7-pana 1 (1).png" alt="customerServiceImg" />
        </div>
    </section>
  )
}
