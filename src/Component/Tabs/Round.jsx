import React from 'react'
import styles from '../../styles/OnewayTab.module.css'
import Input from './Input'
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Round = () => {
  return (
    <div className={styles.main}>
        <div className={styles.first}>
        <Input head={"From"} placeholder={"Start typing city"} icon={0} width={245}/>
        <FaArrowRightArrowLeft />
        <Input head={"From"} placeholder={"Start typing city"} icon={1} width={245} />
        </div>

        <div className={styles.second}>
        <Input head={"From"} placeholder={"Start typing city"} icon={0} width={140}/>
        <Input head={"From"} placeholder={"Start typing city"} icon={1} width={140} />
        <Input head={"From"} placeholder={"Start typing city"} icon={1} width={140} />
        </div>

    </div>
  )
}

export default Round;