import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'

import { deleteBookmark } from '../../redux/bookmarks/bookmarks.action';
import { selectActiveBookmarkId, selectActiveCategoryId } from '../../redux/bookmarks/bookmarks.selector';

import './bookmark-dropdown.styles.css'

const BoomarkDropdown = ({ bookmarkId, categoryId, xPos, yPos, deleteBookmark }) => {

  console.log(bookmarkId)
  const handleClick = useCallback(() => {
    deleteBookmark({ bookmarkId, categoryId })
  }, [bookmarkId, categoryId, deleteBookmark])

  return (
    <div
      className="bookmark-dropdown position-fixed"
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

const mapStateToProps = createStructuredSelector({
  bookmarkId: selectActiveBookmarkId,
  categoryId: selectActiveCategoryId
})

const mapDisptachToProps = dispatch => ({
  deleteBookmark: bookmarkData => dispatch(deleteBookmark(bookmarkData)),
})

export default connect(mapStateToProps, mapDisptachToProps)(BoomarkDropdown);