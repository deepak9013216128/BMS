import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTabs } from '../../redux/tabs/tabs.selector';

import './tab-list.styles.css';

const TabList = (props) => {
  const { tabs, location } = props;
  const activeTab = location.search.length > 8 ? location.search.slice(5, 9) : 'tab1';
  // console.log(location, activeTab)
  return (
    <div className="card-header tabs-list">
      <ul className="nav nav-tabs card-header-tabs">
        {tabs.map((tab, idx) => (
          <li className="nav-item" key={tab.id}>
            <Link
              className={`nav-link ${tab.id == activeTab ? 'active' : ''}`}
              to={`/dashboard/?tab=${tab.id}`}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  tabs: selectTabs,
})

export default withRouter(connect(mapStateToProps)(TabList));