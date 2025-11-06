import React from 'react';
import {Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from './Components/Contact';
import Mentions from "./Components/Mentions"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
        
      </Routes>
    </div>
  );
}
