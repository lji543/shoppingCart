export default (state = {}, action) => {

  let newState = {...state};

  switch(action.type) {
    case 'ADD_WISH':
      if (newState[action.item]) {
        newState[action.item] += 1;
      } else {
        newState[action.item] = 1;
      }
      return newState;
    case 'REMOVE_WISH':
      delete newState[action.item];
      return newState;
    default:
      return state;
  }
}
