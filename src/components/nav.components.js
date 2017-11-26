import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  if(localStorage.admin){
    return (
      <div className="nav-links">
        <Link to="/">Home</Link>
        |
        <Link to="/">Management</Link>
        |
        <Link to="/">Front</Link>
        |
        <Link to="/">Back</Link>
        |
        <Link to="/logout">Logout</Link>
      </div>
    )
  }else{
    return (
      <div className="nav-links">
        <Link to="/">Home</Link>
        |
        <Link to="/profile">My Profile</Link>
        |
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Nav;