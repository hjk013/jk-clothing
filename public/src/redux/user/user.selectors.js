import { createSelector } from 'reselect';

// input selector

const selectUser = state => state.user;

// createSelector

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
