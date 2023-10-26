import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

// mui components
import { Stack, Box, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>  
      <Routes>
        <Route path='/' element = {<Home />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
      
    </>
  );
}

export default App;
