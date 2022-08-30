import { useState } from 'react'
import './index.css'
import Header from './components/Header';
import Main from './pages/Main'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      < Header />
      <Routes>
        <Route path="/" element={< Main />}></Route>
        <Route path="/portfolio" element={< Portfolio />}></Route>
        <Route path="/resume" element={< Resume />}></Route>
        <Route path="/contact" element={< Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
