import { createBrowserHistory } from 'history'

import { FETCH, API } from '../../utils/api'
import UserActionTypes from './user.types';
import { setError } from '../error/error.action'

export const history = createBrowserHistory()

const loginStart = () => ({
  type: UserActionTypes.LOGIN_START
})
const loginSuccess = (resData) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: resData
})
const loginFailure = (resData) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: resData
})

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginStart());
    FETCH({
      url: API.LOGIN,
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        localStorage.setItem('token', resData.token);
        localStorage.setItem('userId', resData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        dispatch(loginSuccess({
          token: resData.token,
          userId: resData.userId
        }));
        setAutoLogout(remainingMilliseconds, dispatch);
        window.location.reload();
        window.location.href = '/dashboard'
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err))
        dispatch(loginFailure({ message: err }));
        // window.jQuery("#login").modal("hide");
        window.jQuery("#errorPopup").modal("show");
      });
  };

}

export const signup = ({ name, email, password }) => {
  const signupStart = () => ({
    type: UserActionTypes.SIGNUP_START
  })
  const signupSuccess = (resData) => ({
    type: UserActionTypes.SIGNUP_SUCCESS,
    payload: resData
  })
  const signupfailure = (resData) => ({
    type: UserActionTypes.SIGNUP_FAILURE,
    payload: resData
  })

  return dispatch => {
    dispatch(signupStart())
    FETCH({
      url: API.SIGNUP,
      method: 'PUT',
      body: JSON.stringify({ name, email, password })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Creating a user failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        dispatch(signupSuccess({
          token: null,
          userId: null
        }))
        window.jQuery("#signup").modal("hide");
        window.jQuery("#login").modal("show");
        // this.props.history.replace('/');
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err))
        dispatch(signupfailure({ message: err }));
        window.jQuery("#signup").modal("hide");
        window.jQuery("#errorPopup").modal("show");
      });
  }
}

export const checkAuthenticationStatus = () => {
  const checkLogin = () => ({
    type: UserActionTypes.CHECK_LOGIN
  })
  return dispatch => {
    dispatch(checkLogin())
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      dispatch({ type: UserActionTypes.LOGOUT })
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler(dispatch);
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    dispatch(loginSuccess({
      token: token,
      userId: userId
    }));
    setAutoLogout(remainingMilliseconds, dispatch);
  }
}

const setAutoLogout = (milliseconds, dispatch) => {
  setTimeout(() => {
    logoutHandler(dispatch);
  }, milliseconds);
}

const logoutHandler = (dispatch) => {
  dispatch({ type: UserActionTypes.LOGOUT })
  localStorage.removeItem('token');
  localStorage.removeItem('expiryDate');
  localStorage.removeItem('userId');
}
