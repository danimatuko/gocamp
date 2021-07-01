import * as productTypes from "./productTypes";
import Axios from "axios";

export const getAllProducts = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: productTypes.GET_ALL_PRODUCTS_REQUEST
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

export const getProductDetails = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: productTypes.GET_PRODUCT_DETAILS
			});

			const { data } = await Axios.get(`/api/products/${id}`);

			dispatch({
				type: productTypes.GET_PRODUCT_DETAILS_SUCCESS,
				payload: data
			});
		} catch (error) {
			dispatch({
				type: productTypes.GET_PRODUCT_DETAILS_FAIL,
				payload: error.response.data.message || error.message
			});
		}
	};
};

export const deleteProduct = (id) => {
	return async (dispatch, getState) => {
		try {
			dispatch({
				type: productTypes.DELETE_PRODUCT_REQUEST
			});

			const {
				user: { userInfo }
			} = getState();

			const config = {
				headers: {
					Authorization: `${userInfo.token}`
				}
			};
			await Axios.delete(`/api/products/${id}`, config);

			dispatch({
				type: productTypes.DELETE_PRODUCT_SUCCESS
			});
		} catch (error) {
			dispatch({
				type: productTypes.DELETE_PRODUCT_FAIL,
				payload: error.response.data.message || error.message
			});
		}
	};
};
