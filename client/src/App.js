import React from 'react'
import './index.css'
import Header from './components/Header'
import Card from './components/Card'
import Main from './pages/Main'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio';
import Media from './pages/Media'
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      < Header />
      < Card />
      <Routes>
        <Route path="/" element={< Main />}></Route>
        <Route path="/portfolio" element={< Portfolio />}></Route>
        <Route path="/resume" element={< Resume />}></Route>
        <Route path="/media" element={< Media />}></Route>
        <Route path="/contact" element={< Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
