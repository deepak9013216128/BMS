import category from './category.data';
import CategoryActionTypes from './category.types';

import BookmarksActionTypes from '../bookmarks/bookmarks.types';
import { addBookmarkById, addCategoryEntry, deleteBookmarkById, deleteCategoryEntery } from './category.utils';

const INTIAL_STATE = category;

const categoryReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {
    case CategoryActionTypes.ADD_CATEGORY:
      return addCategoryEntry(state, action.payload)
    case BookmarksActionTypes.ADD_BOOKMARK:
      return addBookmarkById(state, action.payload)
    case BookmarksActionTypes.DELETE_BOOKMARK:
      return deleteBookmarkById(state, action.payload)
    case CategoryActionTypes.DELETE_CATEGORY:
      return deleteCategoryEntery(state, action.payload)
    default:
      return state;
  }
}

export default categoryReducer;