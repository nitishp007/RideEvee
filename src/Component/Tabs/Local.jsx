import React from 'react'
import Input from './Input';
import Styles from '../../styles/Local.module.css'
const Local = () => {
  return (
    
      <div className={Styles.main}>
        <Input head={"From"} placeholder={"Start typing city"} icon={0} width={275}/>
        <Input head={"From"} placeholder={"Start typing city"} icon={1} width={275} />
        <Input head={"From"} placeholder={"Start typing city"} icon={2} width={275} />
      </div>                                                                       
    
  )
}

export default Local