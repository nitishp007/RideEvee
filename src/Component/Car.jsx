import React from 'react'
import styles from "../styles/car.module.css"
import car from "../assets/car.png"
import roadcar from "../assets/roadcar.png"
import carhand from "../assets/carhand.png"
const Car = () => {
  return (
    <div className={styles.main}>
        <div className={styles.first}>
            <img src={car} alt="" />
        </div>
        <div className={styles.second}>
            <img src={carhand} alt="" />
        </div>
        <div className={styles.third}>
            <img src={roadcar} alt="" />
        </div>
    </div>
  )
}

export default Car