import React from 'react'
import styles from "../styles/Banner.module.css"
import Main from './Tabs/Main';

const Banner = () => {
  return (
    <div className={styles.main} style={{backgroundImage:"url('./car.jpg')"}}>
        <div className={styles.heading}>
        INDIA'S LEADING ONE-WAY INTER-CITY CAB SERVICE PROVIDER
        </div>
        <Main/>
    </div>
  )
}

export default Banner;