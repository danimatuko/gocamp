import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "./types";

const initialState = {
	loading: false,
	error: null,
	orderDetails: null
};

const orderReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CREATE_ORDER_REQUEST:
			return {
				...state,
				loading: true
			};
		case CREATE_ORDER_SUCCESS:
			return {
				...state,
				loading: false,
				orderDetails: payload
			};
		case CREATE_ORDER_FAIL:
			return {
				...state,
				loading: false,
				error: payload
			};

		default:
			return state;
	}
};

export default orderReducer;
