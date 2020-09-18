
export const deleteTab = (state, action) => {
  const { payload } = action;
  const activeTab = payload;
  const existingAllIds = state.allIds.filter(id => id !== activeTab)
  delete state.byId[activeTab];

  // delete category function call

  return {
    byId: state.byId,
    allIds: existingAllIds
  }
}

export const addCategory = (state, action) => {
  const { payload } = action
  const { tabId, categoryId } = payload

  // Look up the correct tab, to simplify the rest of the code
  const tab = state.byId[tabId]

  return {
    ...state,
    // Update our Post object with a new "comments" array
    byId: {
      ...state.byId,
      [tabId]: {
        ...tab,
        category: tab.category.concat(categoryId)
      }
    }
  }
}