import {
	GET_ALL_USERS_REQUEST,
	GET_ALL_USERS_SUCCESS,
	GET_ALL_USERS_FAIL,
	DELETE_USER_REQUEST,
	DELETE_USER_FAIL
} from "../admin/adminTypes";

const initialState = {
	users: [],
	loading: false,
	error: null
};

const adminReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALL_USERS_REQUEST:
		case DELETE_USER_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_ALL_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: payload
			};
		case GET_ALL_USERS_FAIL:
		case DELETE_USER_FAIL:
			return {
				...state,
				loading: false,
				error: payload
			};

		default:
			return state;
	}
};

export default adminReducer;
