import React from 'react';
import AnswerSection from './AnswerSection';
import QuerySection from './QuerySection';

function MainContent() {
  return (
    <main className="main-content-knowledge">
      <div className="content-wrapper-knowledge">
        <div className="content-container-knowledge">
          <h1 className="section-title=knowledge">Ask queries from knowledge base</h1>
          <hr className="divider-knowledge" />
          <AnswerSection />
          <QuerySection />
        </div>
      </div>
    </main>
  );
}

export default MainContent;