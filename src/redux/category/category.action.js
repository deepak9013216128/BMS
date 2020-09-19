import CategoryActionTypes from "./category.types";
import { generateId } from "../../utils/generate-id.utils";


export const addCategory = (tabId, name) => {
  const categoryId = generateId();
  return {
    type: CategoryActionTypes.ADD_CATEGORY,
    payload: { tabId, categoryId, name }
  }
}