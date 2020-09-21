import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './category.styles.css'
import Setting from './setting/setting.component';
import { selectCategory } from '../../redux/category/category.selector';
import Bookmark from '../bookmark/bookmark.component';

const Category = (props) => {
  const [active, setActive] = useState(true);
  const toggle = () => setActive((active) => !active)
  const { category, categoryId } = props;
  const { name, bookmarks } = category;
  // console.log("Category", props)
  return (
    <div id="accordion" className="col-12 col-sm-6 col-lg-4 mb-3">
      <div className="card">
        <div className="card-header p-0 d-flex category_title_background">
          <h5 className="mb-0">
            <button className="btn btn-link text-light">{name}</button>
          </h5>
          <div className="ml-auto mb-0">
            <Setting categoryId={categoryId} />
          </div>
          <div>
            <button className="btn btn-link text-light">
              <i
                id="headingOne"
                data-toggle="collapse"
                data-target={`#${categoryId}`}
                aria-expanded="true"
                aria-controls="collapseOne"
                className={`fa fa-chevron-${active ? 'down' : 'up'}`}
                onClick={toggle}
              ></i>
            </button>
          </div>
        </div>
        <div
          id={categoryId}
          className="collapse show" // show is use for collapse and expand the category
          aria-labelledby="headingOne"
        // data-parent="#accordion"
        >
          {bookmarks.map(
            bookmarkId => (
              <Bookmark
                key={bookmarkId}
                bookmarkId={bookmarkId}
                categoryId={categoryId}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = () => {
  // console.log('Category mapStateToProps', state, props)
  const category = selectCategory();
  return createStructuredSelector({
    category
  })
}

export default connect(mapStateToProps)(Category);