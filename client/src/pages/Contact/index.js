import React from 'react';
import {useState} from 'react';
import '../../index.css';
import axios from 'axios';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    setSent(true);
    try {
      await axios.post('http://localhost:3434/contact')
    } catch (error) {
      console.log(error)
    }
    e.preventDefault()
    
  }

  return (
    <div className="container">
        <ul className="centertext">
          <li><a href="https://github.com/kingSHLERM">GITHUB</a></li>
          <li><a href="www.linkedin.com/in/connor-carciofini420">LINKEDIN</a></li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="your name"></input>
          <input type="textarea" placeholder="a brief message"></input>
          <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default Contact