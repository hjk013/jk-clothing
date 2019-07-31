// parameter holds the value of the value of the 'state'
// set the type (should never change, so using SNAKE_CASE)
// set the value of the 'state' to the payload
// then it returns the entire object

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
