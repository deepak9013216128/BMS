import React from 'react'
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Header from '../../components/header/header.component';
import MenuBar from '../../components/menu-bar/menu-bar.component';
import TabList from '../../components/tab-list/tab-list.component';
import CategoryList from '../../components/category-list/category-list.component';
import Footer from '../../components/footer/footer.component';

import { selectToggleBookmarkForm } from '../../redux/bookmarks/bookmarks.selector';

import './dashboard.styles.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = ({ toggleBookmarkForm }) => {

  const query = useQuery();
  const activeTab = query.get('tab') ? query.get('tab') : 'tab1';

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

const mapStateToProps = createStructuredSelector({
  toggleBookmarkForm: selectToggleBookmarkForm
})

export default connect(mapStateToProps)(Dashboard);