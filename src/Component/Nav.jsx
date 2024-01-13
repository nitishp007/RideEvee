import React from 'react'
import styles from "../styles/Nav.module.css"
import Logout from './Logout'

function Nav() {
  return (
    <div className={styles.main}>
        <img src="./Logo.png" alt="" height={50}/>
        <img src="./twentyfour.png" height={33}/>
        <div className={styles.second}>
            <a>
            <img src="./download.png" alt="" height={43}/>
            </a>
            <a>
            <Logout/>
            </a>
        </div>
    </div>
  )
}

export default Nav