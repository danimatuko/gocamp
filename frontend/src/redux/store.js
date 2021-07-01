import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productListReducer from "./product/productReducer";
import productDetailsReducer from "./product/productDetailsReducer";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import orderReducer from "./order/orderReducer";
import adminReducer from "./admin/adminReducer";
import productDeleteReducer from "./product/productDelete";

const rootReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	productDelete: productDeleteReducer,
	cart: cartReducer,
	user: userReducer,
	admin: adminReducer,
	order: orderReducer
});

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
