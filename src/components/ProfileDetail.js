import React from 'react';


const ProfileDetail = ({id, name, givenName, familyName, email, image, profilepicStyle, phone}) => {
  return (
    <div className='Profile'>
      <img alt='Photo' className='profilepic' src={image} style={profilepicStyle}/>
        <b>User-Id:</b> {id}<br/>
        <b>Google Name:</b> {name}<br/>
        <b>First Name:</b>{givenName}<br/>
        <b>Last Name:</b> {familyName}<br/>
        <b>Email:</b> {email}<br/>
        <b>Phone:</b> {phone}
    </div>
  )
}

const profilepicStyle={
  width: 256,
  height: 256
}


export default ProfileDetail;