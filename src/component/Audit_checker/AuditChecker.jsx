import React from 'react';
import Sidebar from './Sidebar';
import ProcedureList from './ProcedureList';
import UploadSection from './UploadSection';
import './style.css';

const AuditChecker = () => {
  return (
    <main className="audit-checker" style={{height:'675px'}}>
      <Sidebar />
      <div className="main-content">
        <h1 className="title">Document Validation</h1>
        <div className="content-wrapper">
          <ProcedureList />
          <UploadSection />
        </div>
      </div>
    </main>
  );
};

export default AuditChecker;
