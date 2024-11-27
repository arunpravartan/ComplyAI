import React from 'react';
import styles from './PasswordInput.module.css';

function PasswordInput() {
  return (
    <div className={styles.inputWrapper}>
      {/* <label htmlFor="password" className="visually-hidden">Enter your password</label> */}
      <input
        type="password"
        id="password"
        className={styles.passwordInput}
        placeholder="Enter your password"
        required
      />
    </div>
  );
}

export default PasswordInput;