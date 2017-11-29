import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers, editPhone } from '../actions/users';
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

  submit(model) {
    console.log('triggered submit', model)
    this.setState({show:true})
    this.props.editPhone(model)
    console.log('submit --- >',model);
  }

  quickSubmit(model) {
    this.setState({show:false})
    console.log(model);
    if(model._4!== undefined){
      this.setState({canSubmit:true})
      //this.props.editPhone(model)

    }
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

