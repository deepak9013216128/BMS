import TabActionTypes from "./tabs.types"

export const addTab = (tab) => ({
  type: TabActionTypes.ADD_TAB,
  payload: tab,
})

export const deleteTab = (activeTab) => ({
  type: TabActionTypes.DELETE_TAB,
  payload: activeTab
})