import React, { memo } from 'react';

import './bookmark-form.styles.css'

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import FormTextarea from '../form-textarea/form-textarea.component';

const BookmarkForm = (props) => {

  return (
    <div id='add-bookmark' className='modal fade'>
      <div className="modal-dialog modal-add-bookmark">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add New Bookmark</h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div className="modal-body">
            <form>
              <FormInput
                name='title'
                placeholder='Title'
                type='text'
                required
              />
              <FormInput
                name='url'
                placeholder='URL'
                type='text'
                required
              />
              <FormTextarea
                name='tags'
                placeholder='Seprate tags by commas'
                type='text'
              />
              <FormTextarea
                name='notes'
                placeholder='Notes'
                type='text'
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

export default memo(BookmarkForm);