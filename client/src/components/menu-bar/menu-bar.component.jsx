import React from 'react';
import { Link } from 'react-router-dom';

import CategoryForm from '../category-form/category-form.component';
import TabForm from '../tab-form/tab-form.component';
import CategoryDropdown from './category-dropdown/category-dropdown.component';
import TabDropdown from './tab-dropdown/tab-dropdown.component';

const MenuBar = (props) => {

  return (
    <nav className="nav">
      <Link
        to='#'
        className="nav-link active"
        data-toggle="modal"
        data-target="#add-category"
        data-backdrop="static"
        data-keyboard="false"
      >
        Add Category
      </Link>
      <Link
        to='#'
        className="nav-link"
        data-toggle="modal"
        data-target="#add-tab"
        data-backdrop="static"
        data-keyboard="false"
      >
        Add Tab
      </Link>
      <CategoryDropdown />
      <TabDropdown />
      <CategoryForm />
      <TabForm />
    </nav>
  )
}

export default MenuBar;