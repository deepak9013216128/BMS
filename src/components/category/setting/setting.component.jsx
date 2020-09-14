import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BookmarkForm from '../../bookmark-form/bookmark-form.component';

import { toggleBookmarkForm } from '../../../redux/bookmarks/bookmarks.action';

import './setting.styles.css';

const Setting = ({ toggleBookmarkForm }) => {

  return (
    <div className="custom-dropdown p-2">
      <ul className='custom-dropdown-section'>
        <li><Link to='#'>Rename Category</Link></li>
        <li><Link to='#'>Move to Another Tab</Link></li>
        <li><Link to='#'>Sort A-Z</Link></li>
        <li><Link to='#'>Sort Z-A</Link></li>
        <li>
          <Link
            to='#'
            onClick={toggleBookmarkForm}
            data-toggle="modal"
            data-target="#add-bookmark"
            data-backdrop="static"
            data-keyboard="false"
          >Add Bookmark</Link>
        </li>
        <li><Link to='#'>Delete Category</Link></li>
      </ul>
      <BookmarkForm />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleBookmarkForm: () => dispatch(toggleBookmarkForm())
})

export default connect(null, mapDispatchToProps)(Setting);