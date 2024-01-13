import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { PiAirplaneTiltLight } from "react-icons/pi";
import styles from "../../styles/Input.module.css"

const Input = ({head,placeholder,icon,width}) => {
    const icons=[
        {icon: <IoLocationOutline className={styles.icon}/>},
        {icon: <CiCalendar className={styles.icon}/>},
        {icon:<CiClock2 className={styles.icon}/>},
        {icon: <PiAirplaneTiltLight className={styles.icon}/>}
    ]

  return (
    <div className={styles.main}>
        <div className={styles.label}>{head}</div>
        <div className={styles.wrapper}>
            
            <input placeholder={placeholder} className={styles.input} style={{width:`${width}px`}} />
            {icons[icon].icon}
        </div>
    </div>
  )
}

export default Input