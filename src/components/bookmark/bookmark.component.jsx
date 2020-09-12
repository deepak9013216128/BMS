import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBookmark } from '../../redux/bookmarks/bookmarks.selector';

import './bookmark.styles.css';

const Bookmark = (props) => {

  const { bookmark } = props;
  const { url, title } = bookmark;
  // console.log(props)
  return (
    <div className="card-body p-2">
      <p className='m-0'>
        <a href={url} target='_blank' className="card-link" data-text={title}>{title}</a>
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

export default connect(mapStateToProps, null)(Bookmark);