import React from 'react';

const Welcome = () => {
  const user = localStorage.username;
  const admin = localStorage.admin;

if(localStorage.username) {
    return (
      <div className="welcomeUserSign">
        Hello, {user}!
      </div>
    )
  } else {
    return null;
  }

}

export default Welcome;