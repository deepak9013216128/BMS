import category from './category.data';
import CategoryActionTypes from './category.types';

import bookmarksActionTypes from '../bookmarks/bookmarks.types';
import { addBookmark, addCategoryEntry } from './category.utils';

const INTIAL_STATE = category;

const categoryReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {
    case CategoryActionTypes.ADD_CATEGORY:
      return addCategoryEntry(state, action.payload)
    case bookmarksActionTypes.ADD_BOOKMARK:
      return addBookmark(state, action.payload)
    default:
      return state;
  }
}

export default categoryReducer;