import React from 'react';
import UserDetailView from './UserDetailView';


const UserList = ({users}) => {
  console.log(users)
  return (
    <div className='all-user-list'>
     {
        users.map((user,idx) => {
          return (
            <UserDetailView
              key={idx}
              id={user.id}
              name={user.name}
              givenName={user.givenName}
              familyName={user.familyName}
              email={user.email}
              image={user.imageUrl}
            />
          )
        })
      }
    </div>

  )
}


export default UserList;

