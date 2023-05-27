import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import Parent from './pages/parent';
import Doctor from './pages/doctor';
import Admin from './pages/admin';
import EditData from './pages/EditStudentData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Parent Routes */}
        <Route path="/parent" element={<Parent />} />
        <Route path="/parent/editData" element={<EditData />} />

        {/* Doctor Routes */}
        <Route path="/doctor" element={<Doctor />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
