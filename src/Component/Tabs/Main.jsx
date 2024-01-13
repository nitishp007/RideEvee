import React, { useState } from 'react';
import styles from "../../styles/BannerMain.module.css"
import Input from './Input';
import Out from './Out';
import Local from './Local';
import Airport from './Airport';

const Main = () => {
    const [tab, setTab]=useState(1);
  return (
    <div className={styles.main}>
        <div className={styles.tabGroup}>
            <div className={tab==1? styles.tabHighlighted :styles.tab} onClick={()=>setTab(1)}>
                Outstation
            </div>
            <div className={tab==2? styles.tabHighlighted :styles.tab} onClick={()=>setTab(2)}>
               Local
            </div>
            <div className={tab==3? styles.tabHighlighted :styles.tab} onClick={()=>setTab(3)}>
                Airport
            </div>
        </div>
        {tab==1?<Out/> :tab===2? <Local/>:<Airport/>}
        <button className={ styles.buttonHighlighted } >
                Explore Cars
            </button>
        

    </div>
  )
}

export default Main;