import { createSelector } from "reselect";

export const bookmarks = state => state.bookmarks;

export const selectBookmark = () => createSelector(
  [bookmarks, (state, props) => props.bookmarkId],
  (bookmarks, bookmarkId) => bookmarks.byId[bookmarkId]
)