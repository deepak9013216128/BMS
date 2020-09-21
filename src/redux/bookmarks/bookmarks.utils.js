
export const addBookmarkEntry = (state, payload) => {
  const { bookmarkId, categoryId, title, url, tags, notes } = payload;

  const bookmark = {
    id: bookmarkId,
    categoryId,
    title,
    url,
    tags,
    notes
  }
  return {
    ...state,
    activeCategoryId: null,
    allIds: state.allIds.concat(bookmarkId),
    byId: {
      ...state.byId,
      [bookmarkId]: bookmark
    }
  }
}