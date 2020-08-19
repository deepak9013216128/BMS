import React from 'react';

import Logo from '../assets/logo/logo_transparent.png';

import './login.styles.css';

const Login = (props) => {

  const SubmitLoginForm = (event) => {
    event.preventDefault();

  }
  return (
    <div id="login" class="modal fade">
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <div class="avatar">
              <img src={Logo} alt="Avatar" />
            </div>				
            <h4 class="modal-title">Bookmark Easy</h4>	
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">
            <form onSubmit={SubmitLoginForm}>
              <div class="form-group">
                <input type="text" class="form-control" name="username" placeholder="Username" required="required" />		
              </div>
              <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password" required="required" />	
              </div>        
              <div class="form-group">
                <button 
                  type="submit" 
                  data-toggle="modal" 
                  aria-hidden="true" 
                  data-target="#confirmationPopup" 
                  data-dismiss="modal"
                  class="btn btn-primary btn-lg btn-block login-btn"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;