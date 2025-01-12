import React from 'react'
import styles from './Navigation.module.css' 

export default function Navigation() {
   
  return (
    
    <nav className={`${styles.navigation} container`}>
        <div className='logo'><img src="/Images/38b09a5edf294563b6d59c2e2f490fdf-free.png" alt="Logo" /></div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
        </ul>

    </nav>

  )
}
