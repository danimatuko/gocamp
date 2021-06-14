import Axios from "axios";
import { CART_ADD_ITEM } from "./types";

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

