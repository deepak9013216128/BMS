import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo/logo_transparent.png';

import './signup.sytles.css';

const SignUp = (props) => {

  return (
    <div id="signup" className="modal fade">
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
            <form>
              <div className="form-group">
                <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name="confirmpassword" placeholder="Confirm Password" required="required" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block login-btn">Sign Up</button>
              </div>
            </form>
          </div>
          <div className="modal-footer" data-toggle="modal" aria-hidden="true" data-target="#login" data-dismiss="modal">
            <Link to='#'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;