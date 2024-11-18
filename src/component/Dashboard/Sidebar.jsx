import React, { useState } from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
  const [menuItems, setMenuItems] = useState([
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/98c180505977fa374dcd38f568dad1d99aed7964591bda1942d1a66cf6fb21dc?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065', text: 'Dashboard' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/50f5e57bdf731d9140757d5df0b007ac35099620123ac78fbdb5d15ae92ef2af?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065', text: 'History' },
   ]);
  const [candidateItems, setCandidateItems] = useState([
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcd4dfc5088fb9137eda7bfc6836676f185c9f05e8ea058d16967928bc1354?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065', text: 'Avani Srivastava' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/71be55d492abad250f8caef2fcd3cf130d1acfe21ebf8314b34d4078f5f462a7?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065', text: 'Settings' },
  ]);


  const closeSidebar = () => {
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo} onClick={closeSidebar}>
        <h1 className={styles.companyName}>ComplyAI</h1>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6df618ae8636df5739c65c0445c8a8045fd46b2191a0e0cf7d0ba0bd2ec097b1?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="ComplyAI Logo" className={styles.logoImage} />
      </div>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <img src={item.icon} alt="" className={styles.menuIcon} />
            <span className={styles.menuText}>{item.text}</span>
          </li>
        ))}
      </ul>
      <ul className={styles.menu} style={{ marginTop: '290px' }}>
        {candidateItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <img src={item.icon} alt="" className={styles.menuIcon} />
            <span className={styles.menuText}>{item.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;