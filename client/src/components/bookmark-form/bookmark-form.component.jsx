import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addBookmark } from '../../redux/bookmarks/bookmarks.action';
import { selectActiveCategoryId } from '../../redux/bookmarks/bookmarks.selector';

import useFormInput from '../../hooks/use-form-input.hooks';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import FormTextarea from '../form-textarea/form-textarea.component';

import './bookmark-form.styles.css';

const BookmarkForm = ({ categoryId, addBookmark }) => {

  const [bookmark, updadeBookmark, resetBookmark] = useFormInput({
    title: '',
    url: '',
    tags: '',
    notes: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    try {
      addBookmark({ categoryId, title, url, tags: tags.split(','), notes })
      window.jQuery("#add-bookmark").modal("hide");
      resetBookmark({
        title: '',
        url: '',
        tags: '',
        notes: ''
      })
    } catch (err) {
      console.log(err)
    }
  }
  const { title, url, tags, notes } = bookmark;
  return (
    <div id='add-bookmark' className='modal fade'>
      <div className="modal-dialog modal-add-bookmark">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add New Bookmark</h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <FormInput
                name='title'
                value={title}
                placeholder='Title'
                type='text'
                required
                pattern="^[a-zA-Z_]+( [a-zA-Z_]+)*$"
                maxLength="100"
                title='3 and more Alphabetic letter'
                handleChange={updadeBookmark}
              />
              <FormInput
                name='url'
                value={url}
                placeholder='URL'
                type='text'
                required
                maxLength="100"
                title='3 and more Alphabetic letter'
                handleChange={updadeBookmark}
              />
              <FormTextarea
                name='tags'
                value={tags}
                placeholder='Seprate tags by commas'
                type='text'
                title='3 and more Alphabetic letter'
                handleChange={updadeBookmark}
              />
              <FormTextarea
                name='notes'
                value={notes}
                placeholder='Notes'
                type='text'
                title='3 and more Alphabetic letter'
                handleChange={updadeBookmark}
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

const mapStateToProps = createStructuredSelector({
  categoryId: selectActiveCategoryId
})

const mapDispatchToProps = dispatch => ({
  addBookmark: (data) => dispatch(addBookmark(data))
})

export default memo(connect(mapStateToProps, mapDispatchToProps)(BookmarkForm));