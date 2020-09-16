import TabActionTypes from "./tabs.types"

export const addTab = (tab) => ({
  type: TabActionTypes.ADD_TAB,
  payload: tab,
})