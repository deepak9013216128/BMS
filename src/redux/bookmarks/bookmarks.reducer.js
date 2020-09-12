import bookmarks from './bookmarks.data';
import bookmarksActionTypes from './bookmarks.types';

const INTIAL_STATE = {
  ...bookmarks,
  toggleBookmarkForm: false,

}

const bookmarksReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {

    case bookmarksActionTypes.TOGGLE_BOOKMARK_FORM:
      return {
        ...state,
        toggleBookmarkForm: !state.toggleBookmarkForm
      }

    default:
      return state;
  }
}

export default bookmarksReducer;