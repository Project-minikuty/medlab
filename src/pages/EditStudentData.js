import React from 'react';
import EditStudentProfileForm from '../components/parent-dashboard/studentData';
import BrandNav from '../components/BrandNav';
import Avatar from 'react-avatar';
import Bg from '../components/PageBg';


function EditData() {
  const handleSubmit = (studentData) => {
    // Handle the form submission and update the student's profile
    console.log('Submitted student data:', studentData);
    // Perform necessary operations such as API calls, state updates, etc.
  };

  return (
    <div>
       
       <BrandNav logout="true" />
       <Bg type={0} />
      <div className="parentcontainer"></div>
      <h3 style={{ paddingLeft: '70px', marginTop: '50px', marginBottom: '50px'}}>Edit Student Profile</h3>
      <div style={{ paddingLeft: '70px' }}>
      <Avatar name="User" size="150" round={true} />
      <br></br>
      <br></br>
        <EditStudentProfileForm onSubmit={handleSubmit} />
      </div>
       <br></br>
       <br></br>
 
    </div>
  );
}

export default EditData;
