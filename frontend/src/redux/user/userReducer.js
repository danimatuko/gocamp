import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./userTypes";

const initialState = {
	userInfo: localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: null,
	loading: false,
	error: null
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN:
			return {
				...state,
				loading: true,
				userInfo: payload
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: payload
			};
		case LOGIN_FAIL:
			return {
				...state,
				loading: false,
				error: payload
			};
		case LOGOUT:
			return {};
		default:
			return state;
	}
};

export default userReducer;
