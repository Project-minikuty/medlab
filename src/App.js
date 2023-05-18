import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandNav from './components/BrandNav';
import Login from './components/Login';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';

function App() {
  return (
  <>

  <BrandNav />
  <Heading />
  <SubHeading />
  <Login/>
  </>
  );
}

export default App;
