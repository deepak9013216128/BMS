import React from 'react';

import './confirmation-popup.styles.css';

const ConfirmationPopup = (props) => {

  return (
    <div id="confirmationPopup" className="modal fade">
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header">
            <div className="icon-box">
              <i className="material-icons" className='fa fa-check'></i>
            </div>
            <h4 className="modal-title">Awesome!</h4>
          </div>
          <div className="modal-body">
            <p className="text-center">Your booking has been confirmed. Check your email for detials.</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPopup;