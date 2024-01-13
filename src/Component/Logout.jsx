import React, { useState } from 'react';
import styles from '../styles/Lgout.module.css';
import HomeIcon from "../assets/homeIcon.png"
import LogIcon from "../assets/logIcon.png"
import BookingIcon from "../assets/bookingIcon.png"

const Logout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.userDropdown} onClick={toggleDropdown}>
      <div className={styles.userIcon}>
        <img src="./ravi.png" alt="" height={43} />
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
          <button className={styles.ddb} onClick={() => console.log('Profile clicked')}>
            <img src={HomeIcon} alt="" />
            Profile
          </button>
          <button className={styles.ddb} onClick={() => console.log('Settings clicked')}>
            <img src={BookingIcon} alt="" />
            Settings
          </button>
          <button className={styles.ddb} onClick={() => console.log('Logout clicked')}>
            <img src={LogIcon} alt="" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Logout;
