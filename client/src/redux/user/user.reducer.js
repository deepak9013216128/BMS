import UserActionTypes from './user.types';


const INTIAL_STATE = {
  isAuth: false,
  token: null,
  userId: null,
  authLoading: false,
  checkLogin: true,
  pendingRefreshingToken: null,
  error: null
};

const userReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {
    case UserActionTypes.LOGIN_START:
    case UserActionTypes.SIGNUP_START:
    case UserActionTypes.CHECK_LOGIN:
      return {
        ...state,
        authLoading: true
      }
    case UserActionTypes.LOGIN_SUCCESS:
    case UserActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuth: true,
        checkLogin: false,
        authLoading: false,
        token: action.payload.token,
        userId: action.payload.userId
      }
    case UserActionTypes.LOGIN_FAILURE:
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isAuth: false,
        authLoading: false,
        error: action.payload
      }
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: null,
        userId: null,
        checkLogin: false,
        authLoading: false,
        pendingRefreshingToken: null,
        error: null
      }
    default:
      return state;
  }
}

export default userReducer;