import React from 'react'
import styles from "../styles/ChooseAc.module.css"

const ChooseAc = () => {
  return (
    <div className={styles.main} style={{backgroundImage:"url('./building.png')", objectFit:"cover"}}>
        <div className={styles.heading}>
            <div className={styles.header}>
                 Why choose AC Bus or AC Train for your One-way Journey?
            </div>
            <div className={styles.text}>
            Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly.

            <b>read More....</b>
            </div>
        </div>
    </div>
  )
}

export default ChooseAc;