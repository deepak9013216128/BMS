import { addCategoryEntry } from './category.utils';
import category from './category.data';
import CategoryActionTypes from './category.types';
const INTIAL_STATE = category;

const categoryReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {
    case CategoryActionTypes.ADD_CATEGORY:
      return addCategoryEntry(state, action)
    default:
      return state;
  }
}

export default categoryReducer;