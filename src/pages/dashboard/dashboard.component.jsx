import React from 'react'
import { useLocation } from 'react-router-dom';

import Header from '../../components/header/header.component';
import TabList from '../../components/tab-list/tab-list.component';

import './dashboard.styles.css'
import Category from '../../components/category/category.component';
import Footer from '../../components/footer/footer.component';
import CategoryList from '../../components/category-list/category-list.component';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = (props) => {

  const query = useQuery();
  const activeTab = query.get('tab') ? query.get('tab') : 'tab1';

  console.log('Dashboard')
  return (
    <div className='dashboard'>
      <Header />
      <section className="section dashboard-section" >
        <div className="container">
          <div className="card">
            <TabList />
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