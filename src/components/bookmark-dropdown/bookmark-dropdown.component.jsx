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
  return (
    <div
      className="bookmark-dropdown position-fixed"
      onContextMenu={handleContextMenu}
    >
      <ul style={{ top: yPos, left: xPos }}>
        <li><Link to='#'>Edit</Link></li>
        <li><Link to='#'>Copy URL</Link></li>
        <li><Link to='#'>Move to another Category</Link></li>
        <li><Link to='#' onClick={handleClick}>Delete</Link></li>
      </ul>
    </div>
  )
}

const mapDisptachToProps = dispatch => ({
  deleteBookmark: bookmarkData => dispatch(deleteBookmark(bookmarkData)),
})

export default connect(null, mapDisptachToProps)(BoomarkDropdown);