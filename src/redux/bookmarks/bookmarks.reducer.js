import bookmarks from './bookmarks.data';
import bookmarksActionTypes from './bookmarks.types';
import { addBookmarkEntry } from './bookmarks.utils';

const INTIAL_STATE = {
  ...bookmarks,
  toggleBookmarkForm: false,

}

const bookmarksReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {

    case bookmarksActionTypes.ADD_BOOKMARK:
      return addBookmarkEntry(state, action.payload)

    default:
      return state;
  }
}

export default bookmarksReducer;