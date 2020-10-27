
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
  let updatedAllIds = state.allIds.filter(id => id.toString() !== bookmarkId.toString())
  return {
    ...state,
    activeCategoryId: null,
    activeBookmarkId: null,
    allIds: updatedAllIds.concat(bookmarkId),
    byId: {
      ...state.byId,
      [bookmarkId]: bookmark
    }
  }
}

export const deleteBookmarkEntery = (state, payload) => {
  const { bookmarkId } = payload;
  const updatedAllIds = state.allIds.filter(id => id !== bookmarkId)
  const updatedById = state.byId;
  delete updatedById[bookmarkId];
  return {
    ...state,
    allIds: updatedAllIds,
    byId: updatedById,
  }
}

export const deleteBookmarksByCategory = (state, payload) => {
  const { bookmarkIds } = payload;

  const updatedById = state.byId
  bookmarkIds.forEach(id => delete updatedById[id])
  const updatedAllIds = state.allIds.filter(id => !bookmarkIds.includes(id))

  return {
    ...state,
    byId: updatedById,
    allIds: updatedAllIds
  }
}