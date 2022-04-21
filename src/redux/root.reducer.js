import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import homeReducer from "./home/home.reducer";
import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  home: homeReducer,
  shop: shopReducer,
  cart: cartReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
