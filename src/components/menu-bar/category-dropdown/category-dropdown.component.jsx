import React from 'react';

const CategoryDropdown = ({ toggleBookmarkForm }) => {

  return (
    <div className="custom-dropdown">
      <a className="nav-link" href="#">Categories</a>
      <ul className='custom-dropdown-section'>
        <li><a href="/">Sort A-Z</a></li>
        <li><a href="/">Sort Z-A</a></li>
        <li><a href="/">Collapse all</a></li>
        <li><a href="/">Expand all</a></li>
      </ul>
    </div>
  )
}

export default CategoryDropdown;