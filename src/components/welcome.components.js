import React from 'react';

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