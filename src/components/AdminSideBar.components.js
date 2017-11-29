import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Logout from '../containers/Logout';

const AdminSideBar = () => {
    return (
            <div>
              <Menu
                width="200px"
                noOverLay>
                  <Link to="/home">Home</Link>
                <div id="line"/>
                  <Link to="/users">Employees</Link>
                <div id="line"/>
                  <Link to="/logout"><Logout/></Link>
                <div id="line"/>
              </Menu>
           </div>
    );

}

export default AdminSideBar;