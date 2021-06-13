import productTypes from "./types";
import Axios from "axios";

export const getAllProducts = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: productTypes.GET_ALL_PRODUCTS
			});

			const { data } = await Axios.get("/api/products");

			dispatch({
				type: productTypes.GET_ALL_PRODUCTS_SUCCESS,
				payload: data
			});
		} catch (error) {
			dispatch({
				type: productTypes.GET_ALL_PRODUCTS_FAIL,
				payload: error.response.data.message || error.message
			});
		}
	};
};
