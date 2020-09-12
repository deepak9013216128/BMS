import React from 'react';
import { connect } from 'react-redux';

import { toggleBookmarkForm } from '../../../redux/bookmarks/bookmarks.action';

import './setting.styles.css';

const Setting = ({ toggleBookmarkForm }) => {

  return (
    <div className="category-setting p-2">
      <ul className='category-setting-section'>
        <li><a href="/">Rename Category</a></li>
        <li><a href="/">Move to Another Tab</a></li>
        <li><a href="/">Sort A-Z</a></li>
        <li><a href="/">Sort Z-A</a></li>
        <li>
          <a
            href="#"
            onClick={toggleBookmarkForm}
            data-toggle="modal"
            data-target="#add-bookmark"
            data-backdrop="static"
            data-keyboard="false"
          >Add Bookmark</a>
        </li>
        <li><a href="/">Delete Category</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleBookmarkForm: () => dispatch(toggleBookmarkForm())
})

export default connect(null, mapDispatchToProps)(Setting);