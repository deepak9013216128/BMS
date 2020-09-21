import TabActionTypes from "./tabs.types";
import CategoryActionTypes from '../category/category.types';

import { deleteTab, addCategory } from './tabs.utils'

const INTIAL_STATE = {
  byId: {
    "tab1": {
      id: "tab1",
      name: "college",
      body: "......",
      category: ["category1", "category2", "category3", "category4", "category5", "category6", "category7"]
    },
    "tab2": {
      id: "tab2",
      name: "news",
      body: "......",
      category: ["category8", "category9", "category10"]
    },
    "tab3": {
      id: "tab3",
      name: "Web Development",
      body: "......",
      category: ["category11", "category12", "category13", "category14", "category15", "category16", "category17"]
    },
  },
  allIds: ["tab1", "tab2", "tab3"]
}

const tabsReducer = (state = INTIAL_STATE, action) => {

  switch (action.type) {
    case TabActionTypes.ADD_TAB:
      return {
        ...state,
        byId: { ...state.byId, [action.payload.id]: action.payload },
        allIds: [...state.allIds, action.payload.id],
      }
    case TabActionTypes.DELETE_TAB:
      return deleteTab(state, action)

    case CategoryActionTypes.ADD_CATEGORY:
      return addCategory(state, action.payload)

    default:
      return state;
  }
}

export default tabsReducer;