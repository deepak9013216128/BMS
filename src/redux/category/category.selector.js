import { createSelector } from "reselect";

export const category = state => state.category;

export const selectCategory = () => createSelector(
  [category, (_, props) => props.categoryId],
  (category, categoryId) => category.byId[categoryId]
)