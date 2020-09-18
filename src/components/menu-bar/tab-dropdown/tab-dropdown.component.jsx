import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteTab } from '../../../redux/tabs/tabs.action'

import useActiveTab from '../../../hooks/use-active-tab.hooks';

const TabDropdown = ({ deleteTab }) => {

  const activeTab = useActiveTab();

  const handleDeleteTab = () => {
    try {
      deleteTab(activeTab);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="custom-dropdown">
      <Link to='#' className="nav-link">Tabs</Link>
      <ul className='custom-dropdown-section'>
        <li><Link to='#'>Rename Tab</Link></li>
        <li><Link to='#'>Sort A-Z</Link></li>
        <li><Link to='#'>Sort Z-A</Link></li>
        <li><Link to='#'>Change Tab Order</Link></li>
        <li>
          <Link to='#' onClick={handleDeleteTab}>Delete Tab</Link>
        </li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTab: (activeTab) => dispatch(deleteTab(activeTab))
})

export default connect(null, mapDispatchToProps)(TabDropdown);