import React, { useState } from 'react';
import './AuthForm.css'; // Import a common CSS file for styling
import { Link,useNavigate } from 'react-router-dom';

const SignInUser = () => {
  // State variables for email and password
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      sessionStorage.setItem('token', data);
      navigate("/postfeedback");
    } catch (error) {
      console.error('Error during SignUp:', error.message);
    }

    // Clear the form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-container">
      <h2>User Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Login</button>
      </form>
      <Link style={{ marginLeft: '5%' }} to="/user/signup">
        SignUp
      </Link>
    </div>
  );
};

export default SignInUser;
