import React, { useState } from 'react';
import { getUsers } from './User';
import { Link, useNavigate } from 'react-router-dom';
import './Combined.css';

function LoginPagee({onSignIn}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
      event.preventDefault();
        const users = getUsers();
        const user = users.find((u) => u.email === email);
    
        if (user) {
          if (user.password === password) {
            // Update authenticated user in App component
            onSignIn(user);
            localStorage.setItem('loggedInUserEmail', user.email);
            navigate('/ProMgmt'); // Navigate to the profile updating 
            
          } else {
            setError('Incorrect password');
            console.log(localStorage)
          }
        } else {
          setError('User not found. Click below if you have forgotten your Email or Password');
          console.log(error)
        }
      };  


  return (
    <div className='blank-page'>
      <form>
      <header className='form-container'>
        <h1>Welcome to your Personal Internet Banking</h1>
        <div>
          <div>
            <p>Email: </p>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div >
            <p>Password: </p>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
            {/* Displaying incorrect password / email */}
            {error && <div className='error'>{error}</div>}
          <br />
          <div className="button-container">
            <Link to="/Registration">
              <button >Sign Up</button>
            </Link>
            <br />
            <button  onClick={handleLogin}>Login</button>
          </div>
          <div>
          <br />
          <br />
          <Link to="/forgotep">Forgot Email / Password?</Link>
          <br />
          <br />
          <Link to="/Registration">Don't have an account with us? Register now!</Link>
          </div>
        </div>
      </header>
      </form>
    </div>
    );
}
export default LoginPagee;