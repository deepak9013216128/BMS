import React from 'react';

import './tab-list.styles.css';

const TabList = (props) => {
  return (
    <div className="card-header tabs-list">
      <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="/dashboard">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/dashboard" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  )
}

export default TabList;