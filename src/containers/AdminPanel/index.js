import React, {Component} from 'react';
import { connect } from 'react-redux';
//editshift, delete shift
import { loadUsers } from '../../actions/users';
import { loadShifts } from '../../actions/shifts';
import AdminNavBar from '../../components/AdminNavBar';
import Header from '../../components/Header';
class AdminPanel extends Component {
  constructor() {
    super() ;

    this.state= {

    }
  }


render() {
  return (
    <div>
      <Header/>
      <AdminNavBar/>

    </div>
  )
}

}

const mapStateToProps = (state) => {
  return{
    shift: state.shifts,
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (users) => {
      dispatch(loadUsers)
    },
    loadShifts: (shifts) => {
      dispatch(loadShifts)
    }
  }
}


const ConnectedAdminPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel)

export default ConnectedAdminPanel;
