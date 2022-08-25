// import { useState, useEffect } from 'react'
import Header from './components/Header';
import me_pic from './components/images/me.png'
import './index.css'

function App() {
  return (
    <div>
      <Header />
      <main class="grid grid-1">
        <article>
          <h1>Connor Carciofini</h1>
          <p>Web Developer, Videographer, Musician, and Restaurant Professional from Minneapolis, Minnesota</p>
        </article>
        <figure class="grid-item grid-1-item-2">
          <img id="me" alt="me" src={me_pic} width="100%"></img>
        </figure>
      </main>
    </div>
  );
};

export default App;
