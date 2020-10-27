import BookmarksActionTypes from './bookmarks.types';
import { generateId } from '../../utils/generate-id.utils';

export const activeCategory = (categoryId, bookmarkId) => ({
  type: BookmarksActionTypes.ACTIVE_CATEGORY,
  payload: { categoryId, bookmarkId }
})

export const removeActiveBookmark = () => ({
  type: BookmarksActionTypes.ROMOVE_ACTIVE_BOOKMARK
})

export const addBookmark = (data) => {
  let bookmarkId = generateId()
  // console.log(data)
  if (data.id) {
    bookmarkId = data.id
  }
  return {
    type: BookmarksActionTypes.ADD_BOOKMARK,
    payload: { bookmarkId, ...data }
  }
}

export const deleteBookmark = (bookMarkData) => ({
  type: BookmarksActionTypes.DELETE_BOOKMARK,
  payload: bookMarkData
})