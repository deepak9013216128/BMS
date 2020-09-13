import React from 'react';

const TabDropdown = ({ toggleBookmarkForm }) => {

  return (
    <div className="custom-dropdown">
      <a className="nav-link" href="#">Tabs</a>
      <ul className='custom-dropdown-section'>
        <li><a href="/">Rename Tab</a></li>
        <li><a href="/">Sort A-Z</a></li>
        <li><a href="/">Sort Z-A</a></li>
        <li><a href="/">Change Tab Order</a></li>
        <li><a href="/">Delete Tab</a></li>
      </ul>
    </div>
  )
}

export default TabDropdown;