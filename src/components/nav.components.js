import React from 'react';
//import { Link } from 'react-router-dom';

const Nav = () => {
    const user = localStorage.username;
    const group = localStorage.group;
    return (
      <div className="nav-links">
        <div className="welcomeUserSign">
          Welcome back, {user ? user : 'you'}!
        </div>
      </div>
    );

}

export default Nav;