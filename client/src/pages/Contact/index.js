import React from 'react';
import { useState } from 'react';
import '../../index.css';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [formInput, setFormInput] = useState({
    from: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(true);
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(formInput)
    })
  }


  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container top">
      <ul className="center">
        <li><a href="https://github.com/infinity-machine">GITHUB</a></li>
        <span>-</span>
        <li><a href="www.linkedin.com/in/connor-carciofini420">LINKEDIN</a></li>
      </ul>
      <div className="center">
        {!sent ?
          (
            <form id="form" className="container onecolumn" method="post" action="/contact" onSubmit={handleSubmit}>
              <label>SEND ME A MESSAGE</label>
              <input id="frominput" className="centertext" name="from" onChange={handleInputChange} value={formInput.from} type="text" placeholder="your name"></input>
              <textarea id="messageinput" name="message" onChange={handleInputChange} value={formInput.message} type="textarea" placeholder="..."></textarea>
              <button>SUBMIT</button>
            </form>
          ) :
          <h3>MESSAGE SENT</h3>
        }
      </div>


    </div>
  )
}

export default Contact