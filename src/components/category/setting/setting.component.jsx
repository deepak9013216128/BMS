import React from 'react';
import { useCallback } from 'react';
import { connect } from 'react-redux';

import { activeCategory } from '../../../redux/bookmarks/bookmarks.action';
import { deleteCategory } from '../../../redux/category/category.action';

import useActiveTab from '../../../hooks/use-active-tab.hooks';
import './setting.styles.css';

const Setting = ({ categoryId, bookmarkIds, activeCategory, deleteCategory }) => {

  const activeTab = useActiveTab();
  const handleClick = () => activeCategory(categoryId)

  const handleDeleteCategory = useCallback(() => {
    deleteCategory({ categoryId, activeTab, bookmarkIds })
  }, [deleteCategory])

  return (
    <div className="custom-dropdown p-2">
      <ul className='custom-dropdown-section'>
        <li><span>Rename Category</span></li>
        <li><span>Move to Another Tab</span></li>
        <li><span>Sort A-Z</span></li>
        <li><span>Sort Z-A</span></li>
        <li>
          <span
            data-toggle="modal"
            data-target="#add-bookmark"
            data-backdrop="static"
            data-keyboard="false"
            onClick={handleClick}
          >Add Bookmark</span>
        </li>
        <li><span onClick={handleDeleteCategory}>Delete Category</span></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  activeCategory: (categoryId) => dispatch(activeCategory(categoryId)),
  deleteCategory: categoryData => dispatch(deleteCategory(categoryData))
})

export default connect(null, mapDispatchToProps)(Setting);