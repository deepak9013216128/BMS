
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

export const deleteBookmarkEntery = (state, payload) => {
  const { bookmarkId } = payload;
  const updatedAllIds = state.allIds.filter(id => id !== bookmarkId)
  const updatedById = state.byId
  delete updatedById[bookmarkId];
  return {
    ...state,
    allIds: updatedAllIds,
    byId: updatedById,
  }
}