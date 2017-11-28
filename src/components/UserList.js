import React from 'react';
import UserDetailView from './UserDetailView';
import { Link } from 'react-router-dom';

const UserList = ({users}) => {
  console.log(users)
  return (
    <div className='all-user-list'>
     {
        users.map((user,idx) => {
          console.log(user)
          return (
              <UserDetailView
                key={idx}
                id={user.id}
                name={user.name}
                email={user.email}
                image={user.image}
                phone={user.phone}
              />
          )
        })
      }
    </div>

  )
}


export default UserList;

