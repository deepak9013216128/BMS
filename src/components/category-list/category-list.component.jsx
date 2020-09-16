import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Category from '../category/category.component';
import { selectCategoryIds } from '../../redux/tabs/tabs.selector';

const CategoryList = (props) => {
  const { categoryIds } = props;

  const categoryList = categoryIds ? categoryIds.map(
    categoryId => <Category key={categoryId} categoryId={categoryId} />
  ) : null

  // console.log('Category List', props)
  return (
    <div className="row">
      {
        categoryList
      }
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

export default connect(mapStateToProps)(CategoryList);