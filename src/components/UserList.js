import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers, editPhone } from '../actions/users';
import UserDetailView from './UserDetailView';
import { Link } from 'react-router-dom';
import PopupEditPhone from '../containers/EditUser/PopupEditPhone';
import _sortBy from 'lodash/sortBy';
const _ = require('lodash');

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
   this.setState({show:false})
   model.id = id;
   this.props.editPhone(model)
 }


  render() {
    const users = this.props.users
    return (
      <div id="all-user-list">
       { _.sortBy(users, o => +new Date(o.id))
        .map((user,idx) => {
          return (
              <div id="user-card-container" key={idx}>
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
                 contentStyle={{overflow: "hidden"}}
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