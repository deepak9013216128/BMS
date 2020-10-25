import { createSelector } from "reselect";

export const user = state => state.user;

export const selectIsAuth = createSelector(
  [user],
  user => user.isAuth
)
export const selectUserId = createSelector(
  [user],
  user => user.userId
)
export const selectToken = createSelector(
  [user],
  user => user.Token
)
export const selectAuthLoading = createSelector(
  [user],
  user => user.authLoading
)
export const selectCheckLogin = createSelector(
  [user],
  user => user.checkLogin
)
export const selectError = createSelector(
  [user],
  user => user.error
)
