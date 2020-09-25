import BookmarksActionTypes from './bookmarks.types';
import { generateId } from '../../utils/generate-id.utils';

export const activeCategory = (categoryId) => ({
  type: BookmarksActionTypes.ACTIVE_CATEGORY,
  payload: categoryId
})

export const activeBookmark = (bookmarkData) => ({
  type: BookmarksActionTypes.ACTIVE_BOOKMARK,
  payload: bookmarkData
})

export const addBookmark = (data) => {
  const bookmarkId = generateId()
  return {
    type: BookmarksActionTypes.ADD_BOOKMARK,
    payload: { bookmarkId, ...data }
  }
}

export const deleteBookmark = (bookMarkData) => ({
  type: BookmarksActionTypes.DELETE_BOOKMARK,
  payload: bookMarkData
})