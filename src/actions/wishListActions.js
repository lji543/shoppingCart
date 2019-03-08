export const addToWishes = item => {
  // return action
  return {
    type: 'ADD_WISH', // type is required for all actions
    item
  }
}

export const removeFromWishes = item => {
  // return action
  return {
    type: 'REMOVE_WISH', // type is required for all actions
    item
  }
}
