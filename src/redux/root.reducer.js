import { combineReducers } from "redux";

import homeReducer from "./home/home.reducer";
import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  shop: shopReducer,
  cart: cartReducer,
});

export default rootReducer;
