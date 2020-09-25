import category from './category.data';
import CategoryActionTypes from './category.types';

import BookmarksActionTypes from '../bookmarks/bookmarks.types';
import { addBookmark, addCategoryEntry, deleteBookmark } from './category.utils';

const INTIAL_STATE = category;

const categoryReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {
    case CategoryActionTypes.ADD_CATEGORY:
      return addCategoryEntry(state, action.payload)
    case BookmarksActionTypes.ADD_BOOKMARK:
      return addBookmark(state, action.payload)
    case BookmarksActionTypes.DELETE_BOOKMARK:
      return deleteBookmark(state, action.payload)
    default:
      return state;
  }
}

export default categoryReducer;