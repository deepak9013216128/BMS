import bookmarks from './bookmarks.data';
import BookmarksActionTypes from './bookmarks.types';
import { addBookmarkEntry } from './bookmarks.utils';

const INTIAL_STATE = {
  ...bookmarks,
  activeCategoryId: null,

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

    default:
      return state;
  }
}

export default bookmarksReducer;