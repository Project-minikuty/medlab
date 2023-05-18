import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandNav from './components/BrandNav';
import TwoGrids from './components/TwoGrid';

function App() {
  // Disable scrolling on mount
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    return () => {
      // Enable scrolling on unmount
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <BrandNav />
      <TwoGrids />
    </>
  );
}

export default App;
