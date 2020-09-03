import React, { useState } from 'react';

import './category.styles.css'
import Setting from './setting/setting.component';

const Category = (props) => {
  const [active, setActive] = useState(true);
  const toggle = () => setActive((active) => !active)
  return (
    <div id="accordion" className="col-12 col-sm-6 col-lg-4 mb-3">
      <div className="card">
        <div className="card-header p-0 d-flex category_title_background">
          <h5 className="mb-0">
            <button className="btn btn-link text-light">News</button>
          </h5>
          <div className="ml-auto mb-0">
            <Setting />
          </div>
          <div>
            <button className="btn btn-link text-light">
              <i
                id="headingOne"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                className={`fa fa-chevron-${active ? 'down' : 'up'}`}
                onClick={toggle}
              ></i>
            </button>
          </div>
        </div>
        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body p-2">
            <p className='m-0'><a href="#" target='_blank' className="card-link">Card link</a></p>
            <p className='m-0'><a href="#" target='_blank' className="card-link">Another link</a></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Category;