import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Combined.css';

function ForgotEp() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the logic for sending password recovery email here
    console.log('Email Sent')
    setSubmitted(true);
  };

  return (
    <div className="blank-page">
      <header className='form-container'>
        <h1>Forgot Email or Password</h1>
        <div>
          {submitted ? (
            <p>An email has been sent to {email} with instructions to recover your password.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <p>Enter your email:</p>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <button className="submit-button">Submit</button>
              </div>
            </form>
          )}
          <div>
            <br />
            <Link to="/">Back to Login</Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ForgotEp;
