import React, { memo } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Category from '../category/category.component';
import BookmarkForm from '../bookmark-form/bookmark-form.component';
import { selectCategoryIds } from '../../redux/tabs/tabs.selector';

import useContextMenu from '../../hooks/use-context-menu.hooks';

import BookmarkDropdowon from '../bookmark-dropdown/bookmark-dropdown.component';

const CategoryList = (props) => {
  const { xPos, yPos, showMenu } = useContextMenu('bookmark');
  const { categoryIds } = props;
  const categoryList = categoryIds ? categoryIds.map(
    categoryId => <Category key={categoryId} categoryId={categoryId} />
  ) : null

  console.log('Category List')
  return (
    <div className="row">
      {
        categoryList
      }
      <BookmarkForm />
      {showMenu && <BookmarkDropdowon xPos={xPos} yPos={yPos} />}
    </div>
  )
}

const mapStateToProps = () => {
  const categoryIds = selectCategoryIds()
  // console.log('mapStateToProps')
  return createStructuredSelector({
    categoryIds
  })
}

export default connect(mapStateToProps)(memo(CategoryList));