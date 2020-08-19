import React from 'react';

import './error-popup.styles.css';

const ErrorPopup = (props) => {

  return (
    <div id="errorPopup" class="modal fade">
      <div class="modal-dialog modal-confirm">
        <div class="modal-content">
          <div class="modal-header">
            <div class="icon-box">
              <i class="material-icons">&#xE5CD;</i>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body text-center">
            <h4>Ooops!</h4>	
            <p>Something went wrong. File was not uploaded.</p>
            <button class="btn btn-success" data-dismiss="modal">Try Again</button>
          </div>
        </div>
      </div>
    </div>   
  )
}

export default ErrorPopup;