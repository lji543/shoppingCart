export const addToShelf = item => {
  // return action
  return {
    type: 'STOCK_ITEM', // type is required for all actions
    item
  }
}
