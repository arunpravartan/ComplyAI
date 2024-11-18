import React from 'react';
import styles from './ContinueButton.module.css';

function ContinueButton({onClick}) {
  return (
    <button type="submit" className={styles.continueButton} onClick={onClick}>
      Continue
    </button>
  );
}

export default ContinueButton;