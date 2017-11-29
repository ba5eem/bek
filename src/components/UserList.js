import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/users';
import UserDetailView from './UserDetailView';
import { Link } from 'react-router-dom';
import EditableCell from './EditableCell'
import PopupEditPhone from '../containers/EditUser/PopupEditPhone'
class UserList extends Component {
  constructor(){
    super();

    this.state = {
      text: '',
      editing: false
    }
  }

  attributeChange (attribute, value) {
    const { name } = this.props.puck
    this.props.updatePuck(name, {[attribute]: value})
  }

  render() {
    const users = this.props.users
    return (
      <div className='all-user-list'>
       {
          users.map((user,idx) => {
            console.log('USERLIST', user)
            return (
              <div>
                <UserDetailView
                  key={idx}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  image={user.image}
                  phone={user.phone}
                />
                <PopupEditPhone
                />
              </div>
            )
          })
        }
      </div>

    )
  }
}



const mapStateToProps = (state) => {
  return{
    users: state.users,

  }
}

const ConnectedUserList = connect(
  mapStateToProps,
  {loadUsers}
)(UserList)

export default ConnectedUserList;

