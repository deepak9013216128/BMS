import category from './category.data';
const INTIAL_STATE = category;

const categoryReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {

    default:
      return state;
  }
}

export default categoryReducer;