import React, { memo } from 'react';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

const TabForm = (props) => {

  return (
    <div id='add-tab' className='modal fade'>
      <div className="modal-dialog modal-add-tab">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add Tab</h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div className="modal-body">
            <form>
              <FormInput
                name='title'
                placeholder='Name'
                type='text'
                required
              />
              <FormButton
                type='submit'
                label='Add'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(TabForm);