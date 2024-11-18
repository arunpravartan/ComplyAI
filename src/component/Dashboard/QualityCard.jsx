import React from 'react';
import styles from './QualityCard.module.css';

function QualityCard({ title, icon, procedures, active, onClick }) {
  return (
    <article className={`${styles.card} ${active ? styles.active : styles.inactive}`} onClick={onClick}>
      <img src={icon} alt="" className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      {procedures.map((procedure, index) => (
        <button key={index} className={styles.procedureButton}>
          {procedure}
        </button>
      ))}
    </article>
  );
}

export default QualityCard;