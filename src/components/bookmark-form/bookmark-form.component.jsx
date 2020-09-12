import React from 'react';

import './bookmark-form.styles.css'

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
              <div className="form-group">
                <input type="text" className="form-control" name="title" placeholder="Title" required="required" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="url" placeholder="URL" required="required" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="tags" placeholder="Seprate tags by commas" />
              </div>
              <div className="form-group">
                <textarea type="text" className="form-control" name="notes" placeholder="Notes"></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block login-btn">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookmarkForm;