import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import Parent from './pages/parent';
import Doctor from './pages/doctor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </Router>
  );
}

export default App;
