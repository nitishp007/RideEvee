import React from 'react'
import style from '../styles/Oneway.module.css'
const Oneway = () => {
  return (
    <div className={style.main}>
        <div className={style.head}>Why Choose Oneway Cab?</div>
        <div className={style.wrap}>
            <div className={style.first}>
                <ul>
                    <li>Instant Booking & Confirmation</li>
                    <li>Confirmed Booking Immediately</li>
                    <li>No Return Fare for One-Way Trip</li>
                    <li>Clean & Professional Cab Services</li>
                    <li>No Night or Luggage Charges</li>
                </ul>
            </div>
            <div className={style.second}>
            <ul>
                    <li>Pick-up from your house</li>
                    <li>Dedicated Cab just for you</li>
                    <li>Drop to your desired destination</li>
                    <li>Completed more than 20,000+ One-Way Trips</li>
                    <li>Multiple Payment Option including Credit Card.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Oneway