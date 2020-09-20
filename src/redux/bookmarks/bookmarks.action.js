import bookmarksActionTypes from './bookmarks.types';
import { generateId } from '../../utils/generate-id.utils';

export const addBookmark = (data) => {
  const bookmarkId = generateId()
  return {
    type: bookmarksActionTypes.ADD_BOOKMARK,
    payload: { bookmarkId, ...data }
  }
}