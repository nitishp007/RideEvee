// TableComponent.jsx
import React from 'react';
import styles from '../styles/TableComponent.module.css'; // Import your CSS module
import Table from "../assets/Table.png"

const TableComponent = () => {
  return (
    <div className={styles.main}>
      <img src={Table} alt="" className={styles.img} />
    </div>
  );
};

export default TableComponent;
