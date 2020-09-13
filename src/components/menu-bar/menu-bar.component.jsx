import React from 'react';

import CategoryForm from '../category-form/category-form.component';
import TabForm from '../tab-form/tab-form.component';
import CategoryDropdown from './category-dropdown/category-dropdown.component';
import TabDropdown from './tab-dropdown/tab-dropdown.component';

const MenuBar = (props) => {

  return (
    <nav class="nav">
      <a
        className="nav-link active"
        data-toggle="modal"
        data-target="#add-category"
        data-backdrop="static"
        data-keyboard="false"
        href="#"
      >Add Category</a>
      <a
        className="nav-link"
        data-toggle="modal"
        data-target="#add-tab"
        data-backdrop="static"
        data-keyboard="false"
        href="#">Add Tab</a>
      <CategoryDropdown />
      <TabDropdown />
      <CategoryForm />
      <TabForm />
    </nav>
  )
}

export default MenuBar;