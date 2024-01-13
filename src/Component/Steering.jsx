import React from 'react'
import styles from "../styles/Steering.module.css"
import Steer from '../assets/steering.png'
import Flag from "../assets/Flag.png"
import People from "../assets/people.png"
import Box from "../assets/box.png"
import Doller from "../assets/Doller.png"
const Steering = () => {
  return (
    <div className={styles.main}>
        <div className={styles.first}>
            <img src={Steer} alt="" />
        </div>
        <div className={styles.second}>
            <div className={styles.upper}>
                 Why choose Yatri Car Rental?
            </div>
            <div className={styles.lower}>
                <div className={styles.lowera}>
                    <div className={styles.component}>
                        <div className={styles.img}>
                            <img src={Flag} alt="" />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.head}>FAST RESPONSE TIME</span>
                            <span className={styles.body}>Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.</span>
                        </div>
                    </div>
                    <div className={styles.component}>
                        <div className={styles.img}>
                            <img src={People} alt="" />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.head}>VAST FLEET</span>
                            <span className={styles.body}>We have all kinds of Car on Rent available like Sedan, Suv, Muv, Premium Sedan, Tampo Traveller etc as per your requirement.</span>
                        </div>
                    </div>
                </div>
                <div className={styles.lowerb}>
                <div className={styles.component}>
                        <div className={styles.img}>
                            <img src={Box} alt="" />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.head}>EASY TO ORDER</span>
                            <span className={styles.body}>Easily Book Cab Online with our website or call our customer support team.</span>
                        </div>
                    </div>
                    <div className={styles.component}>
                        <div className={styles.img}>
                            <img src={Doller} alt="" />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.head}>GREAT TARRIFS</span>
                            <span className={styles.body}>Rent A Car !Our car hire tariff are very low when compare to other operators in Lucknow. Book online cabs with best prices in Lucknow at Yatri Car Rental </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steering