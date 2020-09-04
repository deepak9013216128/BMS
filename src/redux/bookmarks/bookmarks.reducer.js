import bookmarks from './bookmarks.data';
const INTIAL_STATE = bookmarks;

const bookmarksReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {

    default:
      return state;
  }
}

export default bookmarksReducer;