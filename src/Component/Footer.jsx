import React from 'react'
import styles from "../styles/Footer.module.css"
import logo from "../assets/Logo.png"
import Arrow from "../assets/Rectangle.png"
const Footer = () => {
  return (
    <div className={styles.main}>
        <div className={styles.first}>
            <img src={logo} alt="" />
        </div>
        <div className={styles.second}>
            <div className={styles.sec}>Home</div>
            <div className={styles.sec}>About</div>
            <div className={styles.sec}>Services</div>
            <div className={styles.sec}>Contact</div>
            <div className={styles.sec}>News</div>
            <div className={styles.sec}>Privacy Policy</div>
        </div>
        <div className={styles.third}>
                <div className={styles.thirda}>
                    NewsLetter
                </div>
                <input placeholder="Email" type="email" className={styles.input}/>
                <div className={styles.thirdb}>
                    <img src={Arrow} alt="" className={styles.arrow}/>
                </div>
        </div>
        <div className={styles.forth}>
            All Copyrights are reserved by RIDE EVEE
        </div>
    </div>
  )
}

export default Footer