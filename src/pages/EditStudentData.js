import React from 'react';
import EditStudentProfileForm from '../components/parent-dashboard/studentData';
import BrandNav from '../components/BrandNav';

function EditData() {
  const handleSubmit = (studentData) => {
    // Handle the form submission and update the student's profile
    console.log('Submitted student data:', studentData);
    // Perform necessary operations such as API calls, state updates, etc.
  };

  return (
    <div>
      <BrandNav logout="true" />
      <div className="parentcontainer"></div>
      <h3 style={{ paddingLeft: '150px', marginTop: '50px', marginBottom: '50px'}}>Edit Student Profile</h3>
      <div style={{ paddingLeft: '150px' }}>
        <EditStudentProfileForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default EditData;
