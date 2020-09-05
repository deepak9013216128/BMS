import { createSelector } from 'reselect'

export const tabs = state => state.tabs;

export const selectTabs = createSelector(
  tabs,
  tabs => tabs.allIds.map(id => ({ name: tabs.byId[id].name, id: tabs.byId[id].id }))
)