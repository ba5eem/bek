import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';


const NonUserSideBar = () => {
    return (
          <div>
            <Menu
              width="200px">
                <Link to="/">Home</Link>
              <div id="line"/>
                <Link to="/login">Login</Link>
            </Menu>




          </div>
    );

}

export default NonUserSideBar;