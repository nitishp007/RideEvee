import React, { useState } from 'react'
import styles from "../styles/Nav.module.css"
import Logout from './Logout'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.main}>
        <img className={styles.first} src="./Logo.png" alt="" height={50}/>
        <img className={styles.sec} src="./twentyfour.png" height={33}/>
        <div className={styles.second}>
            <img src="./download.png" alt="" height={43}/>
            <Logout/>
        </div>
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        {isOpen && (
            <div data-open={isOpen} className={styles.navLinks}>
                {/* Add your navigation links here */}
                <img src="./download.png" alt="" width={43} height={43}/>
              <Logout/>
            </div>
        )}
    </div>
  )
}

export default Nav