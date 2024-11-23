import React from 'react';
import styles from './QualityCard.module.css';

function QualityCard({ customStyles, title, icon, procedures, active, css, onClick }) {
  return (
    <article className={`${styles.card} ${active ? styles.active : styles.inactive}`} onClick={onClick}>
      <img src={icon} alt="" className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      {procedures.map((procedure, index) => (
         <p  key={index} style={customStyles}> {procedure} </p>
      ))}
    </article>
  );
}

export default QualityCard;