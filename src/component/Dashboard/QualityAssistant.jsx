import React from 'react';
import QualityCard from './QualityCard';
import styles from './QualityAssistant.module.css';
import { useNavigate } from 'react-router-dom';

const QualityAssistant = () => {
  const navigate = useNavigate();
  const qualityCards = [
    {
      title: 'Quality Doc Validation',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/de08754ff288bd280b0be4919b4e24ae4c4c0f4dea1e86cf404244b9a3ca0565?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065',
      procedures: ['Validate documents against regulatory guidelines and internal standards '],
      active: true,
    },
    {
      title: 'Knowledge Hub',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc1a93f842c19c978d2b36d6e2431e23013102835e9a6302b4c369194efe7fb7?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065',
      procedures: ['Natural language search regulatory compliance topics'],
      active: true,
    },
    {
      title: 'Predictive Analytics',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a0196a760d6d29eaf4ea6ce00adfa09e5141ce114d0e3ced38d988b31a123f4a?placeholderIfAbsent=true&apiKey=3a4ca977ef8d444389c929708ee52065',
      procedures: [''],
      active: false,
    },
  ];

  const handleCardClick = (card, index) => {
   if(index === 0){
    navigate('/auditchecker');
   }
   if(index === 1){
    navigate('/knowledgeHub');
   }
  }
  return (
    <section className={styles.qualityAssistant} style={{width : '1220px'}}>
<<<<<<< HEAD
      <h2 className={styles.title}>Comply AI</h2>
      <div className={styles.cardContainer}>
        {qualityCards.map((card, index) => (
=======
      <h1 className={styles.title}>Comply AI</h1>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <QualityCard key={card.id} {...card} />
          ))}
        {/*{qualityCards.map((card) => (
>>>>>>> parent of defc78d2 (Updated QualityAssistant.jsx)
          <QualityCard key={index} 
          {...card}
          customStyles={{
            marginTop: index === 0 ? '0px' : "28px", // Set margin to 0px for index 0
          }}
           onClick={() => handleCardClick(card, index)} />
<<<<<<< HEAD
        ))}
=======
         ))}*/}
>>>>>>> parent of defc78d2 (Updated QualityAssistant.jsx)
      </div>
    </section>
  );
}

export default QualityAssistant;