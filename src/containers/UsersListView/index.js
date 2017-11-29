import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import UserList from '../../components/UserList.js';

//import filterUserStatus from '../../lib/filterUserStatus';
//import filterRoles from '../../lib/filterRoles';
//import filterUser from '../../lib/filterUser';
//import editHelper from '../../lib/editUser';
//import SingleUser from '../../components/SingleUser.js';



class UserListView extends Component {
  constructor(){
    super();

    this.state = {

    }
  }
/*
   componentDidMount(){
    this.props.loadUsers();
    let id = localStorage.userId;
    let admin = filterRoles(this.props.users,id);
    if(admin.length !==0){
      this.setState({
        admin: true,
        edit: true,
        auth: true })
    }
  }

  handleChange(e){ editHelper(e); }

  editNow(user,e){
    let editedUser = editHelper(e);
    this.setState({user: user, edit: true});
    if(this.state.edit){

      editedUser.id = user[0].id;
      this.props.editUser(editedUser);
      this.setState({user: null, edit: false});
    }
  }
*/
  componentWillMount(){
    this.props.loadUsers();

  }


/*  loadUser(id,e){ this.setState( {user: filterUser(this.props.users,id)} ); }

  backToUsers(e){
    e.preventDefault();
    this.setState({user: null});
  }*/

  render(){
    const user = this.props.users
    console.log(user)
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