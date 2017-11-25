import React, {Component} from 'react';
import { connect } from 'react-redux';
//editshift, delete shift
import { loadUsers } from '../../actions/users';
import { loadShifts } from '../../actions/shifts';


class ShiftDetailView extends Component {
  constructor() {
    super() ;

    this.state= {
      shift: '',
    }
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


const ConnectedShiftDetailView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShiftDetailView)

export default ConnectedShiftDetailView;
