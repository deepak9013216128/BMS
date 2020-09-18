import CategoryActionTypes from "./category.types";
import { generateCategoryId } from './category.utils';


export const addCategory = (tabId, name) => {
  const categoryId = generateCategoryId();
  return {
    type: CategoryActionTypes.ADD_CATEGORY,
    payload: { tabId, categoryId, name }
  }
}