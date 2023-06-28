import React from 'react';
import EditStudentProfileForm from '../components/parent-dashboard/studentData';
import BrandNav from '../components/BrandNav';

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
      <div>
      
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
