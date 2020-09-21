import React from 'react';
import { Link } from 'react-router-dom';

import './bookmark-dropdown.styles.css'

const BoomarkDropdown = ({ xPos, yPos }) => {

  return (
    <div
      className="bookmark-dropdown position-fixed"

    >
      <ul style={{ top: yPos, left: xPos }}>
        <li><Link to='#'>Rename Category</Link></li>
        <li><Link to='#'>Move to Another Tab</Link></li>
        <li><Link to='#'>Sort A-Z</Link></li>
        <li><Link to='#'>Sort Z-A</Link></li>
      </ul>
    </div>
  )
}

export default BoomarkDropdown;