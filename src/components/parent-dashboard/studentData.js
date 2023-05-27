import React, { useState } from 'react';

function EditStudentProfileForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [dob, setDob] = useState('');
  const [bmi, setBmi] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a student object with the form data
    const studentData = {
      name,
      age,
      height,
      weight,
      dob,
      bmi,
      bloodGroup,
      guardianName,
      occupation,
      phoneNumber,
      address,
    };

    // Call the onSubmit callback with the student data
    onSubmit(studentData);

    // Reset the form fields
    setName('');
    setAge('');
    setHeight('');
    setWeight('');
    setDob('');
    setBmi('');
    setBloodGroup('');
    setGuardianName('');
    setOccupation('');
    setPhoneNumber('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ borderRadius: '5px', width: '100%' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ borderRadius: '5px', width: '100%' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Height:
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} style={{ borderRadius: '5px', width: '100%' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Weight:
          <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} style={{ borderRadius: '5px', width: '100%' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Date of Birth:
          <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} style={{ borderRadius: '5px', width: '100%' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          BMI:
          <input type="text" value={bmi} onChange={(e) => setBmi(e.target.value)} style={{ borderRadius: '5px', width: '100%' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Blood Group:
          <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} style={{ borderRadius: '5px', width: '100%' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Parent Name:
          <input type="text" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} style={{ borderRadius: '5px', width: '100%' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Occupation:
          <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} style={{borderRadius: '5px', width: '100%' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Phone No:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ borderRadius: '5px', width: '100%' }} />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ color: 'black' }}>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} style={{ borderRadius: '5px', width: '100%' }} />
        </label>
      </div>
      <button
        type="submit"
        style={{
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '2px solid #498589',
          backgroundColor: 'white',
          color: '#498589',
          padding: '5px 10px',
          borderRadius: '4px',
          display: 'block',
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default EditStudentProfileForm;
