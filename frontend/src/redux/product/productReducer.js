import * as productTypes from "./productTypes";

const initialState = {
	loading: false,
	products: [],
	error: null
};

const productListReducer = (state = initialState, action) => {
	switch (action.type) {
		case productTypes.GET_ALL_PRODUCTS_REQUEST:
			return {
				loading: true
			};
		case productTypes.GET_ALL_PRODUCTS_SUCCESS:
			return {
				loading: false,
				products: action.payload
			};
		case productTypes.GET_ALL_PRODUCTS_FAIL:
			return {
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default productListReducer;
