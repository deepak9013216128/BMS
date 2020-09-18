import React, { memo, useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

import { addCategory } from '../../redux/category/category.action';

import useActiveTab from '../../hooks/use-active-tab.hooks.js';

const CategoryForm = ({ addCategory }) => {
  const [name, setName] = useState('');
  const handleChange = e => setName(e.target.value)
  const tabId = useActiveTab()

  const handleSubmit = e => {
    e.preventDefault();
    try {
      addCategory(tabId, name)
      setName('')
      window.jQuery("#add-category").modal("hide");
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div id='add-category' className='modal fade'>
      <div className="modal-dialog modal-add-category">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add Category</h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <FormInput
                name='title'
                value={name}
                placeholder='Name'
                type='text'
                required
                pattern="^[a-zA-Z_]+( [a-zA-Z_]+)*$"
                maxLength="30"
                title='3 and more Alphabetic letter'
                handleChange={handleChange}
              />
              <FormButton
                type='submit'
                label='Add'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addCategory: (tabId, name) => dispatch(addCategory(tabId, name))
})

export default memo(connect(null, mapDispatchToProps)(CategoryForm));