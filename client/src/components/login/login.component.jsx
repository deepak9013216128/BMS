import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo/logo_transparent.png';

import './login.styles.css';

const Login = (props) => {

  const SubmitLoginForm = (event) => {
    event.preventDefault();

  }
  return (
    <div id="login" className="modal fade">
      <div className="modal-dialog modal-login">
        <div className="modal-content">
          <div className="modal-header">
            <div className="avatar">
              <img src={Logo} alt="Avatar" />
            </div>
            <h4 className="modal-title">Bookmark Easy</h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div className="modal-body">
            <form onSubmit={SubmitLoginForm}>
              <div className="form-group">
                <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  data-toggle="modal"
                  aria-hidden="true"
                  data-target="#confirmationPopup"
                  data-dismiss="modal"
                  className="btn btn-primary btn-lg btn-block login-btn"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <Link to='#'>Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;