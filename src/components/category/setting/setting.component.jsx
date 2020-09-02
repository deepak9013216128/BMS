import React, { useState } from 'react';

import './setting.styles.css';

const Setting = (props) => {
  const [active, setActive] = useState(true);
  const toggle = () => setActive((active) => !active)
  return (
    <div className="category-setting">
      <ul className='category-setting-section'>
        <li><a href="/">Rename Category</a></li>
        <li><a href="/">Move to Another Tab</a></li>
        <li><a href="/">Sort A-Z</a></li>
        <li><a href="/">Sort Z-A</a></li>
        <li><a href="/">Add Bookmark</a></li>
        <li><a href="/">Delete Category</a></li>
      </ul>
    </div>
  )
}
export default Setting;