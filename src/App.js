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
import Appoinments from './pages/Appointments';
import AddUser from './pages/addUser'
import StudentProgress from './pages/studentProgress';

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
        <Route path="/parent/appointments" element={<Appoinments/>} />
        <Route path="/parent/studentprogress" element={<StudentProgress/>} />
       

        {/* Doctor Routes */}
        <Route path="/doctor" element={<Doctor />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/addnewuser" element={<AddUser/>} />
      </Routes>
    </Router>
  );
}

export default App;
