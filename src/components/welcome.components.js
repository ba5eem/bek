import React from 'react';
//import { Link } from 'react-router-dom';

const Welcome = () => {
    const user = localStorage.username;
    const group = localStorage.group;
    return (

        <div className="welcomeUserSign">
          Hello, {user ? user : ''}!
        </div>

    );

}

export default Welcome;