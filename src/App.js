import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from '@material-ui/core/Button';
import MainTiles from './views/MainTiles';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer.js'


function App() {
  return (
    <>
      <Header title="WIM Social Network"/>
      <MainTiles />
      <Footer />
    </>
  );
}

export default App;
