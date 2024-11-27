import React from 'react';
import styles from './EmailInput.module.css';

function EmailInput() {
  return (
    <div className={styles.inputWrapper}>
      {/* <label htmlFor="email" className="visually-hidden">Enter your email</label> */}
      <input
        type="email"
        id="email"
        className={styles.emailInput}
        placeholder="Enter your email"
        required
      />
    </div>
  );
}

export default EmailInput;