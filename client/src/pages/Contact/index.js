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
    <div className="container">
      <ul className="centertext">
        <li><a href="https://github.com/kingSHLERM">GITHUB</a></li>
        <li><a href="www.linkedin.com/in/connor-carciofini420">LINKEDIN</a></li>
      </ul>
      {!sent ?
        (
          <form method="post" action="/contact" onSubmit={handleSubmit}>
            <input name="from" onChange={handleInputChange} value={formInput.from} type="text" placeholder="your name"></input>
            <input name="message" onChange={handleInputChange} value={formInput.message} type="textarea" placeholder="a brief message"></input>
            <button>SUBMIT</button>
          </form>
        ) :
        <h3>MESSAGE SENT</h3>
      }

    </div>
  )
}

export default Contact