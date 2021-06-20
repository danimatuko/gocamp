import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productListReducer from "./product/productReducers";
import productDetailsReducer from "./product/productDetailsReducer";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import orderReducer from "./order/orderReducer";

const rootReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	user: userReducer,
	order:orderReducer
});

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
