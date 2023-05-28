import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import Parent from './pages/parent';
import Doctor from './pages/doctor';
import Admin from './pages/admin';
import EditData from './pages/EditStudentData';
import ViewAssignment from './pages/ViewAssignment';
import SubmitAssignment from './pages/SubmitAssignment';
import Submission from './pages/SubmissionPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login />} />

        {/* Parent Routes */}
        <Route path="/parent" element={<Parent />} />
        <Route path="/parent/editData" element={<EditData />} />
        <Route path="/parent/viewAssignment" element={<ViewAssignment/>} />
        <Route path="/parent/submitAssignment" element={<SubmitAssignment/>} />
        <Route path="/parent/submitAssignment/submit" element={<Submission/>} />


        {/* Doctor Routes */}
        <Route path="/doctor" element={<Doctor />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
