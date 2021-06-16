import Axios from "axios";
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "./userTypes";

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: LOGIN
		});

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		const { data } = await Axios.post("/api/users/login", { email, password }, config);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: data
		});

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data.message || error.message
		});
	}
};
