import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from '@material-ui/core/Button';
import MainTiles from './views/MainTiles';
import AWSADashboard from './views/AWSADashboard';
import Header from './components/Header';
import AWSAFooter from './components/AWSAFooter';


function App() {
  return (
    <>
      <Header />
      <AWSADashboard />
      <AWSAFooter />
    </>
  );
}

export default App;
