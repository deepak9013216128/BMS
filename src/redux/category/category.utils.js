
export const addCategoryEntry = (state, action) => {
  const { payload } = action
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