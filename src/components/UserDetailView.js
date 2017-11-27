import React from 'react';


const UserDetailView = ({id, name, givenName, familyName, email, image}) => {
  return (
    <div className='eachUser'>
        <b>User-Id:</b> {id}<br/>
        <b>Google Name:</b> {name}<br/>
        <b>First Name:</b>{givenName}</span><br/>
        <b>Last Name:</b> {familyName}<br/>
        <b>Email:</b> {email}<br/>
        <b>Image:</b> {image}<br/>
    </div>
  )
}




export default UserDetailView;
