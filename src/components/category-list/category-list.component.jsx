import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Category from '../category/category.component';
import { selectCategoryIds } from '../../redux/tabs/tabs.selector';
import { useMemo } from 'react';


const CategoryList = (props) => {
  const { categoryIds } = props;
  console.log('Category List', props)
  const categoryList = categoryIds.map(categoryId => <Category key={categoryId} categoryId={categoryId} />)
  console.log(categoryList)
  return (
    <div className="row">
      {
        categoryList
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  categoryIds: selectCategoryIds
})
// const mapStateToProps = () => {
//   const CategoryIds = selectCategoryIds()
//   console.log('mapStateToProps')
//   return (state, props) => ({
//     categoryIds: CategoryIds(state, props)
//   })
// }

export default connect(mapStateToProps)(CategoryList);