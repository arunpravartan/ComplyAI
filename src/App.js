import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import AuditChecker from './components/audit-checker/AuditChecker';
import FindingsAuditChecker from './components/audit-checker/FindingsAuditChecker';
import PromptQuestionAnswer from './components/prompt-question-answer/PromptQuestionAnswer';


function App() {
  return (
    
    <Routes>          
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/audit-checker' element={<AuditChecker />} />
      <Route path='/findings-audit-checker' element={<FindingsAuditChecker />} />
      <Route path='/prompt-question-answer' element={<PromptQuestionAnswer />} />
    </Routes>    
  );
}

export default App;
