import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { activeCategory } from '../../../redux/bookmarks/bookmarks.action';

import './setting.styles.css';

const Setting = ({ categoryId, activeCategory }) => {

  const handleClick = () => activeCategory(categoryId)

  return (
    <div className="custom-dropdown p-2">
      <ul className='custom-dropdown-section'>
        <li><Link to='#'>Rename Category</Link></li>
        <li><Link to='#'>Move to Another Tab</Link></li>
        <li><Link to='#'>Sort A-Z</Link></li>
        <li><Link to='#'>Sort Z-A</Link></li>
        <li>
          <Link
            to='#'
            data-toggle="modal"
            data-target="#add-bookmark"
            data-backdrop="static"
            data-keyboard="false"
            onClick={handleClick}
          >Add Bookmark</Link>
        </li>
        <li><Link to='#'>Delete Category</Link></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  activeCategory: (categoryId) => dispatch(activeCategory(categoryId))
})

export default connect(null, mapDispatchToProps)(Setting);