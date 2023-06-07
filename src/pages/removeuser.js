import React, { useState } from 'react';
import "./removeuser.css"
import logo from '../images/MedlabLogo.png';

export default function App() {
  const [myList, setMyList] = useState([]);

  const handleDelete = (index) => {
    const updatedList = [...myList];
    updatedList.splice(index, 1);
    setMyList(updatedList);
  };

  const listItems = myList.map((item, index) => {
    return (
      <li key={index}>
        {item}
        <button type="button" className="delete-button" onClick={() => handleDelete(index)}>
          Delete
        </button>
      </li>
    );
  });

  const myComponent = {
    width: '1250px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll',
  };

  return (
    <div className="App">
      <h1>
        <img src={logo} alt="Logo" />
        MEDLAB
      </h1>
      <div className="body1">
        <h2>List Of Students</h2>
      </div>
      <div className="margin">
        <div className="wrapper1">
          <div style={myComponent} className="nav-links">
            <ul>{listItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
