import bookmarks from './bookmarks.data';
import BookmarksActionTypes from './bookmarks.types';
import { addBookmarkEntry, deleteBookmarkEntery } from './bookmarks.utils';

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
    case BookmarksActionTypes.ACTIVE_BOOKMARK:
      return {
        ...state,
        activeBookmarkId: action.payload.bookmarkId,
        activeCategoryId: action.payload.categoryId
      }
    case BookmarksActionTypes.ADD_BOOKMARK:
      return addBookmarkEntry(state, action.payload)

    case BookmarksActionTypes.DELETE_BOOKMARK:
      return deleteBookmarkEntery(state, action.payload)

    default:
      return state;
  }
}

export default bookmarksReducer;