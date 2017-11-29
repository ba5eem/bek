import React from 'react';
import { Link } from 'react-router-dom';

const UserDetailView = ({id, name, givenName, familyName, email, image, phone}) => {
  return (

      <div className='eachUser'>
        <div className='eachUserPhoto'>
          <Link to={`/${id}`}><img style={profilepicStyle} src={image}/></Link>
        </div><br/>

        <div className='eachUserDetail'>
          <b>User-Id:</b> {id}<br/>
          <b>Google Name:</b> {name}<br/>
          <b>Email:</b> {email}<br/>
          <b>Phone:</b> {phone}<br/>
        </div>
      </div>

  )
}
const profilepicStyle={
  width: 100,
  height: 100,
  padding: 30
}

export default UserDetailView;