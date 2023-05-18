import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandNav from './components/BrandNav';
import Login from './components/Login';

function App() {
  return (
  <>
  <BrandNav />
  <Login/>
  </>
  );
}

export default App;
