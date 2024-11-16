import React from 'react';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuditChecker from './component/Audit_checker/AuditChecker';
import AuditFindings from './component/Recommended_action/AuditFindings';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/audit_checker" element={<AuditChecker />} />      
      <Route path="/recommended_action" element={<AuditFindings />} /> 
    </Routes>
  </Router>
  );
}

export default App;
