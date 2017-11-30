import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import UserList from '../../components/UserList.js';




class UserListView extends Component {
  constructor(){
    super();

  }

  componentWillMount(){
    this.props.loadUsers();

  }

  render(){
    const user = this.props.users

    return(
      <div id="user-list-container">
        <div id="staff-title">
        <p>Staff</p>
        </div>

        <div>
        <UserList
          users={user} />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    users: state.users,
/*    activeUsers: filterUserStatus(state.users,'active'),
    inactiveUsers: filterUserStatus(state.users,'inactive')*/
  }
}

const ConnectedUserListView = connect(
  mapStateToProps,
  {loadUsers}
)(UserListView)

export default ConnectedUserListView;