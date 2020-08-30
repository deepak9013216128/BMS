import React from 'react';
import { useState } from 'react';

const Category = (props) => {
  const [active, setActive] = useState(true);
  const toggle = () => setActive((active) => !active)
  return (
    <div id="accordion" className="col-12 col-sm-6 col-lg-4 mb-3">
      <div class="card">
        <div class="card-header bg-primary p-0 d-flex">
          <h5 class="mb-0">
            <button class="btn btn-link text-light">News</button>
          </h5>
          <div className="ml-auto mb-0">
            <button class="btn btn-link text-light"><i class="fa fa-cog"></i></button>
          </div>
          <div>
            <button
              class="btn btn-link text-light"
              id="headingOne"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i
                class={`fa fa-chevron-${active ? 'up' : 'down'}`}
                onClick={toggle}
              ></i>
            </button>
          </div>
        </div>
        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body p-2">
            <p className='m-0'><a href="#" class="card-link">Card link</a></p>
            <p className='m-0'><a href="#" class="card-link">Another link</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category;