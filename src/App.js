import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import "./css/artisan-card.css";

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import List from './Components/List';
import Artisan from './Components/Artisan';
import Page404 from './Components/Page404';

function App() {

  return ( 
    <div className="App">
      <Header />
      <Routes>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home/>} />
          <Route path="category/:cat" element={<List />} />
          <Route path="artisan/:id" element={<Artisan />} /> 
          <Route path="404" element={<Page404 />} />
          <Route path='*' element={<Navigate to="404" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
