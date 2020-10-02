import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteBookmark } from '../../redux/bookmarks/bookmarks.action';

import './bookmark-dropdown.styles.css'

const BoomarkDropdown = ({ bookmarkId, categoryId, xPos, yPos, deleteBookmark }) => {

  const handleClick = useCallback(() => {
    deleteBookmark({ bookmarkId, categoryId })
  }, [bookmarkId, categoryId, deleteBookmark])

  const handleContextMenu = useCallback((e) => e.preventDefault(), [])

  // console.log('BOOKMARK-DROPDOWN', bookmarkId)

  // change the link into span
  return (
    <div
      className="custom-dropdown bookmark-dropdown position-fixed"
      onContextMenu={handleContextMenu}
    >
      <ul style={{ top: yPos, left: xPos }}>
        <li><span to='#'>Edit</span></li>
        <li><span to='#'>Copy URL</span></li>
        <li><span to='#'>Move to another Category</span></li>
        <li><span to='#' onClick={handleClick}>Delete</span></li>
      </ul>
    </div>
  )
}

const mapDisptachToProps = dispatch => ({
  deleteBookmark: bookmarkData => dispatch(deleteBookmark(bookmarkData)),
})

export default connect(null, mapDisptachToProps)(BoomarkDropdown);