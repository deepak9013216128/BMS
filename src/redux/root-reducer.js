import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tabsReducer from './tabs/tabs.reducer';
import categoryReducer from './category/category.reducer';
import bookmarksReducer from './bookmarks/bookmarks.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: [],
  tabs: tabsReducer,
  category: categoryReducer,
  bookmarks: bookmarksReducer,
})

export default persistReducer(persistConfig, rootReducer);