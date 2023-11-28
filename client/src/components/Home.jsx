import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Feedback Management System</h1>

      <div className="App-content">
        <p>Choose your login type:</p>
        <div className="button-container">
          <Link className="button nav-link" to={"/user/signin"}>
            User Login
          </Link>
          <Link className="button nav-link" to={"/user/signin"}>
            Admin Login
          </Link>

        </div>
      </div>
      </header>
    </div>
  );
}

export default Home;
