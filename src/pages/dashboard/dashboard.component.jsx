import React from 'react'

import Header from '../../components/header/header.component';
import TabList from '../../components/tab-list/tab-list.component';

import './dashboard.styles.css'
import Category from '../../components/category/category.component';

const Dashboard = (props) => {

  return (
    <div className='dashboard'>
      <Header />
      <section className="section" id="about">
        <div className="container">
          <div class="card">
            <TabList />
            <div class="card-body">
              <div className="row">
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
              </div>
            </div>
          </div>
          <div style={{ widows: '400px', height: '2000px' }}></div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard;