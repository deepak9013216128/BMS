import category from "./category.data"

export const addCategoryEntry = (state, payload) => {
  const { categoryId, name } = payload

  // Create our new Category object
  const category = { id: categoryId, name, bookmarks: [] }

  // Insert the new Category object into the updated lookup table
  return {
    ...state,
    byId: {
      ...state.byId,
      [categoryId]: category,
    },
    allIds: state.allIds.concat(categoryId)
  }
}

export const addBookmark = (state, payload) => {
  const { categoryId, bookmarkId } = payload;
  const category = state.byId[categoryId];

  return {
    ...state,
    byId: {
      ...state.byId,
      [categoryId]: {
        ...category,
        bookmarks: category.bookmarks.concat(bookmarkId)
      }
    }
  };
}

export const deleteBookmark = (state, payload) => {
  const { categoryId, bookmarkId } = payload;
  const updateCategory = state.byId[categoryId];
  const updatedBookmarksId = updateCategory.bookmarks.filter(id => id !== bookmarkId)


  return {
    ...state,
    byId: {
      ...state.byId,
      [categoryId]: {
        ...updateCategory,
        bookmarks: updatedBookmarksId
      }
    }
  }
}

export const deleteCategoryEntery = (state, payload) => {

  const { categoryId } = payload;
  const existingById = state.byId;
  delete existingById[categoryId];
  const updatedAllIds = state.allIds.filter(id => id !== categoryId);

  return {
    ...state,
    byId: existingById,
    allIds: updatedAllIds
  }
}