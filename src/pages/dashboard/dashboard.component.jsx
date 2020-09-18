import React from 'react'

import Header from '../../components/header/header.component';
import MenuBar from '../../components/menu-bar/menu-bar.component';
import TabList from '../../components/tab-list/tab-list.component';
import CategoryList from '../../components/category-list/category-list.component';
import Footer from '../../components/footer/footer.component';

import useActiveTab from '../../hooks/use-active-tab.hooks';

import './dashboard.styles.css';

const Dashboard = () => {

  const activeTab = useActiveTab()
  console.log('Dashboard')
  return (
    <div className='dashboard'>
      <Header />
      <section className="section dashboard-section" >
        <div className="container">
          <MenuBar />
          <div className="card">
            <TabList activeTab={activeTab} />
            <div className="card-body">
              <CategoryList activeTab={activeTab} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Dashboard;