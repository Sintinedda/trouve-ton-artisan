import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import "./css/artisan-card.css";

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import List from './Components/List';

function App() {

  return ( 
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home/>} />
          <Route path=":category" element={<List />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
