import { combineReducers } from "redux";

import homeReducer from "./home/home.reducer";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  shop: shopReducer,
});

export default rootReducer;
