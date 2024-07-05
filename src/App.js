import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/Wishlist" element={<Wishlist/>} />
        <Route path="pages/Contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}