import React from 'react'

import Header from '../../components/header/header.component';
import TabList from '../../components/tab-list/tab-list.component';

import './dashboard.styles.css'
import Category from '../../components/category/category.component';
import Footer from '../../components/footer/footer.component';

const Dashboard = (props) => {

  return (
    <div className='dashboard'>
      <Header />
      <section className="section dashboard-section" >
        <div className="container">
          <div className="card">
            <TabList />
            <div className="card-body">
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
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Dashboard;