import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers, editPhone } from '../actions/users';
import UserDetailView from './UserDetailView';
import { Link } from 'react-router-dom';
import PopupEditPhone from '../containers/EditUser/PopupEditPhone';

class UserList extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
      editing: false
    }
    this.state = { canSubmit: false, show: false };
  }

  submit(model,id) {
   console.log('triggered submit', model)
   console.log(id);
   this.setState({show:false})
   model.id = id;
   this.props.editPhone(model)
   console.log('submit --- >',model);
 }


  render() {
    const users = this.props.users
    return (
      <div className='all-user-list'>
       {
          users.map((user,idx) => {
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
                 id={user}
                 submit={this.submit.bind(this)}
                 canSubmit={this.state.canSubmit}/>
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
  {loadUsers, editPhone}
)(UserList)

export default ConnectedUserList;

