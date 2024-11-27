import React from 'react';
import styles from './ContinueButton.module.css';

function ContinueButton() {
  return (
    <button type="submit" className={styles.continueButton} >
      Continue
    </button>
  );
}

export default ContinueButton;