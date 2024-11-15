import React from 'react';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
    </Routes>
  </Router>
  );
}

export default App;
