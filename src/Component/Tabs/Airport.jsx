import React from 'react'
import Input from './Input';
import Styles from '../../styles/Air.module.css'
const Airport = () => {
  return (
    <div>
      <div className={Styles.main}>
        <div className={Styles.container}>
        <Input head={"From"} placeholder={"Start typing city"} icon={0} width={295}/>
        <Input head={"From"} placeholder={"Start typing city"} icon={1} width={295} />
        <Input head={"From"} placeholder={"Start typing city"} icon={2} width={295} />
        <Input head={"From"} placeholder={"Start typing city"} icon={3} width={495} />
        </div>
      </div>                                                                       
    </div>
  )
}

export default Airport