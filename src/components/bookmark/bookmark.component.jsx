import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBookmark } from '../../redux/bookmarks/bookmarks.selector';

import useContextMenu from '../../hooks/use-context-menu.hooks';

import BookmarkDropdowon from './bookmark-dropdown/bookmark-dropdown.component';
import './bookmark.styles.css';

const Bookmark = (props) => {
  const { bookmark, bookmarkId } = props;
  const { xPos, yPos, showMenu } = useContextMenu(bookmarkId);
  const { url, title } = bookmark;
  // console.log(props)
  return (
    <div id={bookmarkId} className="card-body p-2">
      <p className='m-0'>
        <abbr title={title}>
          <a
            href={url}
            target='_blank'
            className="card-link"
            rel="noopener noreferrer"
          >{title}</a>
        </abbr>
      </p>
      {showMenu && <BookmarkDropdowon xPos={xPos} yPos={yPos} />}
    </div >
  )
}

const mapStateToProps = (state, props) => {
  const bookmark = selectBookmark();
  return createStructuredSelector({
    bookmark
  })
}

export default connect(mapStateToProps, null)(Bookmark);