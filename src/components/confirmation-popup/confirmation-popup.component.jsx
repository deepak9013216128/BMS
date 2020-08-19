import React from 'react';

import './confirmation-popup.styles.css';

const ConfirmationPopup = (props) => {

  return (
    <div id="confirmationPopup" class="modal fade">
      <div class="modal-dialog modal-confirm">
        <div class="modal-content">
          <div class="modal-header">
            <div class="icon-box">
              <i class="material-icons" className='fa fa-check'></i>
            </div>				
            <h4 class="modal-title">Awesome!</h4>	
          </div>
          <div class="modal-body">
            <p class="text-center">Your booking has been confirmed. Check your email for detials.</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPopup;