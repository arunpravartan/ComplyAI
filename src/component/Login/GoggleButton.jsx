import React from 'react';
import styles from './GoogleButton.module.css';

function GoogleButton({onClick}) {
  return (
    <button className={styles.googleButton} onClick={onClick}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/09eeed9aee85a3a93483e347ebe40dc4bec75b5bd1e428842559aba4257013dc?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className={styles.icon} />
      <span className={styles.buttonText}>Continue with Google</span>
    </button>
  );
}

export default GoogleButton;