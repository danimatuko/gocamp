import Axios from "axios";
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "./types";

export const createOrder = (order) => async (dispatch, getState) => {
	try {
		dispatch({
			type: CREATE_ORDER_REQUEST
		});

		const {
			user: { userInfo }
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `${userInfo.token}`
			}
		};

		const { data } = await Axios.post("/api/orders", order, config);

		dispatch({
			type: CREATE_ORDER_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: CREATE_ORDER_FAIL,
			payload: error.response.data.message || error.message
		});
	}
};
