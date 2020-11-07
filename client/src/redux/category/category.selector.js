import { createSelector } from "reselect";

export const category = state => state.category;
export const bookmarks = state => state.bookmarks;

export const selectCategory = () => createSelector(
  [category, (_, props) => props.categoryId],
  (category, categoryId) => category.byId[categoryId]
)

export const selectBookmarksByCategoryId = () => createSelector(
  [category, bookmarks, (_, props) => props.categoryId],
  (category, bookmarks, categoryId) => {
    let bookmarkIds = category.byId[categoryId].bookmarks;
    return bookmarkIds.map(id => {
      let bookmark = bookmarks.byId[id]
      return { title: bookmark.title, id: bookmark.id }
    })
  }
)