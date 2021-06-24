import Axios from "axios";
import { GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAIL } from "./adminTypes";

export const getUsers = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: GET_ALL_USERS_REQUEST
		});

		const {
			user: { userInfo }
		} = getState();

		const config = {
			headers: {
				Authorization: `${userInfo.token}`
			}
		};

		const { data } = await Axios.get("/api/users", config);

		dispatch({
			type: GET_ALL_USERS_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_USERS_FAIL,
			payload: error.response.data.message || error.message
		});
	}
};
