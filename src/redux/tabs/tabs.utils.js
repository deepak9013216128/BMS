
export const deleteTab = (state, activeTab) => {

  const existingAllIds = state.allIds.filter(id => id !== activeTab)
  delete state.byId[activeTab];

  // delete category function call

  return {
    byId: state.byId,
    allIds: existingAllIds
  }
}