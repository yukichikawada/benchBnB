import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <Link to="/signup">Sign up</Link>
    <Link to="/login">Login</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h3>{currentUser.username}</h3>
    <button onClick={logout}>Logout</button>
  </div>
)

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks;
);

export default Greeting;
