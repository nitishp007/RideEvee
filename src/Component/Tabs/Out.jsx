import React, { useState } from 'react'
import styles from "../../styles/Out.module.css"
import OnewayTab from './OnewayTab';
import Round from './Round';


const Out = () => {
  const [tab, setTab]=useState(1);
  return (
    <div className={styles.main}>
        <div className={styles.tabGroup}>
            <div className={tab===1? styles.tabHighlighted :styles.tab} onClick={()=>setTab(1)}>
                Oneway
            </div>
            <div className={tab===2? styles.tabHighlighted :styles.tab} onClick={()=>setTab(2)}>
               Round Trip
            </div>
            
        </div>
        {tab===1?<OnewayTab/> :<Round/>}
      
    </div>
  )
}

export default Out