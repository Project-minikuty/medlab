import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './public_pages/Home';
import Parent from './pages/parent';
import Doctor from './pages/doctor';
import Admin from './pages/admin';
import EditData from './pages/EditStudentData';
import ViewAssignment from './pages/ViewAssignment';
import SubmitAssignment from './pages/SubmitAssignment';
import Submission from './pages/SubmissionPage';
import Appoinments from './pages/Appointments';
import AddUser from './pages/addUser'
import StudentList from './pages/StudentList';
import DoctorList from './pages/DoctortList';
import AppointmentList from './pages/appointmentList';

import CreateAssignment from './pages/createAssignment';
import SubmitAssignmentPage from './pages/submitAssignmentPage';

import StudentProgress from './pages/studentProgress';
import LogingOut from './public_pages/logginOut';

import ViewAppointment from './pages/ViewAppointment';
import ViewReport from './pages/viewReport';

import VideoCallPage from './pages/videoCallPage';
import DMPage from './pages/DMPage';

import About from '../src/pages/about'

function App() {
  return (
    <Router>
      <Routes>
        
        {/* Login Route */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lo" element={<LogingOut text="Logging Out"/>} />
        <Route path="/li" element={<LogingOut text="Logging In"/>} />

        {/* Parent Routes */}
        <Route path="/parent" element={<Parent />} />
        <Route path="/parent/editData" element={<EditData />} />
        <Route path="/parent/viewAssignment" element={<ViewAssignment/>} />
        <Route path="/parent/submitAssignment" element={<SubmitAssignment/>} />
        <Route path="/parent/submitAssignment/submit" element={<Submission/>} />
        <Route path="/parent/appointments" element={<Appoinments/>} />
        <Route path="/admin/addnewuser" element={<AddUser/>} />
        <Route path="/parent/studentprogress" element={<StudentProgress/>} />
        <Route path='/videocall' element={<VideoCallPage />} />
        <Route path='/chat' element={<DMPage />} />

        {/* Doctor Routes */}
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/studentList" element={<StudentList/>} />
        <Route path="/doctor/appointmentList" element={<AppointmentList/>} />
        <Route path="/doctor/createAssignment" element={<CreateAssignment/>} />
        <Route path="/doctor/submitAssignment" element={<SubmitAssignmentPage/>} />
        <Route path="/doctor/viewAppointment" element={<ViewAppointment/>} />
        <Route path="/doctor/viewReport" element={<ViewReport/>} />
       

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/addnewuser" element={<AddUser/>} />
        <Route path="/admin/studentlist" element={<StudentList/>} />
        <Route path="/admin/doctorlist" element={<DoctorList/>} />


        {/* About Page */}
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
