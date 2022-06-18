import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Header from './components/header/Header';
import MainContent from './components/main/MainContent';

function App() {
  return (
    <div>
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
