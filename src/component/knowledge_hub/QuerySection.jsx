import React from 'react';

import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './style.css';
const QuerySection = () => {
  return (
    <div className="knowledge-hub-knowledge">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default QuerySection;