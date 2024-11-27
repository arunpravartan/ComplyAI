import React from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import AuditChecker from './component/Audit_checker/AuditChecker';
import AuditFindings from './component/Recommended_action/AuditFindings';
import KnowledgeHubPrompt from './component/knowledge_hub/KnowledgeHubPrompt';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './component/Login/LoginPage';
import KnowledgeHubQuery from './component/knowledge_hub/KnowledgeHubQuery';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/auditchecker" element={<AuditChecker />} /> 
      <Route path="/auditfindings" element={<AuditFindings />} /> 
      <Route path="/knowledgeHub" element={<KnowledgeHubPrompt />} /> 
      <Route path="/knowledgeHubQuery" element={<KnowledgeHubQuery />} /> 
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
  );
}

export default App;
