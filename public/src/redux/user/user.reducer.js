import UserActionTypes from './user.types';

// setting initial state so that redux knows what it is when it fires for the first time
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

// *****Code before Saga Refactor:
// const userReducer = (state = INITIAL_STATE, action) => {
//   // if it is the action.type of 'SET_CURRENT_USER'
//   switch (action.type) {
//     case UserActionTypes.SET_CURRENT_USER:
//       // return everything that was already in the current state,
//       // (since we only want to change the parts we need to)
//       // set with whatever you wanna set it to
//       // and then return as an object
//       return {
//         ...state,
//         currentUser: action.payload,
//       };
//     // remember, all reducers receive all actions no matter what,
//     //  so if it doesn't match the case, then we just return the current state
//     default:
//       return state;
//   }
// };
