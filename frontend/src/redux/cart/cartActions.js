import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ONE_QTY } from "./types";

export const addToCart = (id, qty) => (dispatch, getState) => {
	Axios.get(`/api/products/${id}`)
		.then(({ data }) => {
			dispatch({
				type: CART_ADD_ITEM,
				payload: {
					_id: data._id,
					name: data.name,
					image: data.image,
					price: data.price,
					countInStock: data.countInStock,
					qty: qty
				}
			});
			localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
		})
		.catch((err) => console.log(err, "error"));
};

export const removeOne = (id) => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ONE_QTY,
		payload: id
	});
	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItem = (id) => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id
	});
	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
