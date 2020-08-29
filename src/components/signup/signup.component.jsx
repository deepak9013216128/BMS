import React from 'react';

import Logo from '../assets/logo/logo_transparent.png';

import './signup.sytles.css';

const SignUp = (props) => {

  return (
    <div id="signup" class="modal fade">
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
            <form>
              <div class="form-group">
                <input type="text" class="form-control" name="username" placeholder="Username" required="required" />		
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Email" required="required" />		
              </div>
              <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password" required="required" />	
              </div>
              <div class="form-group">
                <input type="confirmpassword" class="form-control" name="confirmpassword" placeholder="Confirm Password" required="required" />	
              </div>        
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg btn-block login-btn">Sign Up</button>
              </div>
            </form>
          </div>
          <div class="modal-footer" data-toggle="modal" aria-hidden="true" data-target="#login" data-dismiss="modal">
            <a href="">Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;