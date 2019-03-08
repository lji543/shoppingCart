import { combineReducers } from 'redux';
import cart from './cartReducer';
import shelf from './shelfReducer';
import wishes from './wishListReducer';

const rootReducer = combineReducers({
  cart,
  shelf,
  wishes
});

export default rootReducer;
