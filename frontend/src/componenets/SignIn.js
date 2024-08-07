import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');
    if (username === 'hahaha' && password === 'hahaha') {
      navigate('/Admin');
    } else if (username && password) {
      if (username === storedUser && password === storedPass) {
        alert('Sign in successful!');
        setError('');
        navigate('/');  // Redirect to home page
      } else {
        setError('Invalid username or password.');
      }
    } else {
      setError('Please fill in both fields.');
    }
  };

  return (
    <div className='scn'>
      <div className="sncontainer">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Sign In</button>
          <div className="asksignup">You don't have an Account? <Link to="/Signup">Sign up</Link></div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
