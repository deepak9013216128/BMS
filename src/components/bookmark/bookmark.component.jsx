import React from 'react';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { activeBookmark } from '../../redux/bookmarks/bookmarks.action';

import { selectBookmark } from '../../redux/bookmarks/bookmarks.selector';

import './bookmark.styles.css';

const Bookmark = (props) => {
  const { bookmark, bookmarkId, categoryId, activeBookmark } = props;
  const { url, title } = bookmark;
  // console.log(props)
  const handleContextMenu = useCallback(() => {
    activeBookmark({ bookmarkId, categoryId })
  }, [bookmarkId, categoryId, activeBookmark])
  return (
    <div id={bookmarkId} className="card-body p-2">
      <p className='m-0 bookmark'>
        <abbr title={title}>
          <a
            href={url}
            target='_blank'
            className="card-link"
            rel="noopener noreferrer"
            onContextMenu={handleContextMenu}
          >{title}</a>
        </abbr>
      </p>
    </div >
  )
}

const mapStateToProps = (state, props) => {
  const bookmark = selectBookmark();
  return createStructuredSelector({
    bookmark
  })
}

const mapDispatchToProps = dispatch => ({
  activeBookmark: bookMarkData => dispatch(activeBookmark(bookMarkData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);