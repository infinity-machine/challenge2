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
    <div className="container centertext top">
        <h4><a href="https://github.com/infinity-machine">~ github ~</a></h4>
        <h4><a href="www.linkedin.com/in/connor-carciofini420">~ linkedin ~</a></h4>
    
      <div>
        {!sent ?
          (
            <form id="form" className="container onecolumn" method="post" action="/contact" onSubmit={handleSubmit}>
              <label>send me a message</label>
              <input id="frominput" className="centertext" name="from" onChange={handleInputChange} value={formInput.from} type="text" placeholder="YOUR EMAIL OR PHONE NUMBER"></input>
              <textarea id="messageinput" name="message" onChange={handleInputChange} value={formInput.message} type="textarea" placeholder="..."></textarea>
              <button>send</button>
            </form>
          ) :
          <h3>MESSAGE SENT</h3>
        }
      </div>


    </div>
  )
}

export default Contact