import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addTab } from '../../redux/tabs/tabs.action';
import { selectTotalTab } from '../../redux/tabs/tabs.selector';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import { useState } from 'react';


const TabForm = ({ totalTabCount, addTab }) => {

  const [name, setName] = useState('');

  const handleChange = e => setName(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    try {
      const tab = {
        id: `tab${totalTabCount + 1}`,
        name: name,
        body: '...',
        category: []
      }
      addTab(tab)
      setName('')
      window.jQuery("#add-tab").modal("hide");
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div id='add-tab' className='modal fade'>
      <div className="modal-dialog modal-add-tab">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add Tab</h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <FormInput
                name='title'
                placeholder='Name'
                type='text'
                required
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

const mapStateToProps = createStructuredSelector({
  totalTabCount: selectTotalTab
})

const mapDispatchToProps = dispatch => ({
  addTab: tab => dispatch(addTab(tab))
})

export default memo(connect(mapStateToProps, mapDispatchToProps)(TabForm));