import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
  return(
    <div className="NavBar">
    <Link to="/">
      <div className="Nav">Calendar</div>
    </Link>
    <Link to="/shifts">
    <div className="Nav">All Shifts</div>
    </Link>
    <Link to="/users">
    <div className="Nav">Users</div>
    </Link>
    <Link to="/messages">
    <div className="Nav">Messages</div>
    </Link>
  </div>
  )
}

export default AdminNavBar;