import React from 'react';
import styles from './AppleButton.module.css';

function AppleButton() {
  return (
    <button className={styles.appleButton}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3ba3151725e1e7203c388d8d5f354a835c74c8f6a3e4b6b141716bdac338cf?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065" alt="" className={styles.icon} />
      <span className={styles.buttonText}>Continue with Apple</span>
    </button>
  );
}

export default AppleButton;