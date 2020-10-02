import React from 'react';

import './error-popup.styles.css';

const ErrorPopup = (props) => {

  return (
    <div id="errorPopup" className="modal fade">
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header">
            <div className="icon-box">
              <i className="material-icons">&#xE5CD;</i>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div className="modal-body text-center">
            <h4>Ooops!</h4>
            <p>Something went wrong. File was not uploaded.</p>
            <button className="btn btn-success" data-dismiss="modal">Try Again</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPopup;