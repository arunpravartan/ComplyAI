import React from 'react';
import Sidebar from './Sidebar';
import QualityAssistant from './QualityAssistant';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <main className={styles.dashboardWithMenu} aria-label="Dashboard Container">
      <div className={styles.content}>
        <Sidebar />
        <QualityAssistant />
      </div>
    </main>
  );
}

export default Dashboard;