import { LOGIN_USER } from '../actions/login.js';


const login = (state = {}, action) => {

  switch(action.type){
    case LOGIN_USER:
      return action.user;
    default:
      return state
  }
}

export default login;


// import * as actionTypes from '../actionTypes'

// // Reducer
// const DEFAULT_STATE = {onLoggin: false}
// export default function(state = DEFAULT_STATE, action) {
//   switch(action.type) {
//     case actionTypes.ON_LOGGIN:
//       return {...state, onLogging: true}
//     default:
//       return state
//   }
// }

// // Selectors (mapStateToProps)
// export const getLogin = ({onLogging}) => ({
//   onLogging
// })

//nav reducer:
// import { ActionConst } from 'react-native-router-flux'

// const DEFAULT_STATE = {scene: {}}

// export default function reducer(state = DEFAULT_STATE, action = {}) {
//   switch(action.type) {
//     // focus action is dispatched when a new screen comes into focus
//     case ActionConst.FOCUS:
//       return {
//         ...state,
//         scene: action.scene,
//       }

//     default:
//       return state
//   }
// }

// // Selectors (mapStateToProps)
// export const getNav = ({scene}) => ({
//   scene
// })