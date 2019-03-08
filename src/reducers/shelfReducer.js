const initialState = [
  "greens",
  "olive oil",
  "pizza",
  "eggs",
  "chips",
  "salsa",
  "avocados"
]

export default (state = initialState, action) => {
  switch(action.type) {
    case 'STOCK_ITEM':
      console.log('stock item')
      return [...state, action.item];
    default:
      return state;
  }
}
