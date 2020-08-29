import React from 'react';

const Category = (props) => {
  return (
    <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              News
            </button>
          </h5>
        </div>
        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body">
            <p className='m-0'><a href="#" class="card-link">Card link</a></p>
            <p className='m-0'><a href="#" class="card-link">Another link</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category;