import React from 'react';
import { Link } from 'react-router-dom';

const TabDropdown = ({ toggleBookmarkForm }) => {

  return (
    <div className="custom-dropdown">
      <Link to='#' className="nav-link">Tabs</Link>
      <ul className='custom-dropdown-section'>
        <li><Link to='#'>Rename Tab</Link></li>
        <li><Link to='#'>Sort A-Z</Link></li>
        <li><Link to='#'>Sort Z-A</Link></li>
        <li><Link to='#'>Change Tab Order</Link></li>
        <li><Link to='#'>Delete Tab</Link></li>
      </ul>
    </div>
  )
}

export default TabDropdown;