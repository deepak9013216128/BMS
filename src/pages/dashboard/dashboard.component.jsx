import React from 'react'
import Header from '../../components/header/header.component';

import './dashboard.styles.css'

const Dashboard = (props) => {

  return (
    <div className='dashboard'>

      <Header />
      <div style={{ widows: '400px', height: '2000px' }}></div>
    </div>
  )
}

export default Dashboard;