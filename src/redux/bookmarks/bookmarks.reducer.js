import CategoryActionTypes from '../category/category.types';
import bookmarks from './bookmarks.data';
import BookmarksActionTypes from './bookmarks.types';
import { addBookmarkEntry, deleteBookmarkEntery, deleteBookmarksByCategory } from './bookmarks.utils';

const INTIAL_STATE = {
  ...bookmarks,
  activeCategoryId: null,
  activeBookmarkId: null,
}

const bookmarksReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {

    case BookmarksActionTypes.ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategoryId: action.payload
      }
    case BookmarksActionTypes.ADD_BOOKMARK:
      return addBookmarkEntry(state, action.payload)

    case BookmarksActionTypes.DELETE_BOOKMARK:
      return deleteBookmarkEntery(state, action.payload)
    case CategoryActionTypes.DELETE_CATEGORY:
      return deleteBookmarksByCategory(state, action.payload)
    default:
      return state;
  }
}

export default bookmarksReducer;