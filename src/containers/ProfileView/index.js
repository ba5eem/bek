import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';

import ProfileDetail from '../../components/ProfileDetail.js';

//import filterUserStatus from '../../lib/filterUserStatus';
//import filterRoles from '../../lib/filterRoles';
//import filterUser from '../../lib/filterUser';
//import editHelper from '../../lib/editUser';
//import SingleUser from '../../components/SingleUser.js';



class ProfileView extends Component {
  constructor(){
    super();

    this.state = {
      user:{}
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


/*  filterUser(arr, this.props.user.id){
    const data = arr.filter((elem) => {
      return elem.id === this.props.user.id;
      });
      return data;
    }*/


  render(){
    const user = this.props.user
    console.log(localStorage)
    console.log('user from ProfileView-->',user)

    return(
      <div>
        {/*<ProfileDetail

        />*/}
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

const ConnectedProfileView = connect(
  mapStateToProps,
  {loadUsers}
)(ProfileView)

export default ConnectedProfileView;