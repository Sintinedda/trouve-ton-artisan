import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return ( 
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
