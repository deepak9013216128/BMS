import { createSelector } from 'reselect'

export const tabs = state => state.tabs;
export const activeTab = (state, props) => state.tabs.byId[props.activeTab]

export const selectTabs = createSelector(
  [tabs],
  tabs => tabs.allIds.map(id => ({ name: tabs.byId[id].name, id: tabs.byId[id].id }))
)

export const selectCategoryIds = () => createSelector(
  [activeTab],
  (tab) => tab.category
)