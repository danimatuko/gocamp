import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ONE_QTY } from "./types";

const initialState = {
	cartItems: localStorage.getItem("cartItems")
		? JSON.parse(localStorage.getItem("cartItems"))
		: []
};

const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CART_ADD_ITEM: {
			const newItem = payload;
			const itemExist = state.cartItems.find((item) => item._id === newItem._id);

			if (itemExist) {
				newItem.qty += itemExist.qty;
				return {
					...state,
					cartItems: state.cartItems.map((item) => (item === itemExist ? newItem : item))
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, newItem]
				};
			}
		}

		case CART_REMOVE_ONE_QTY: {
			const id = payload;
			const itemExist = state.cartItems.find((item) => item._id === id);

			if (itemExist) {
				const editedItem = { ...itemExist };
				editedItem.qty -= 1;

				return {
					...state,
					cartItems: state.cartItems.map((item) =>
						item === itemExist ? editedItem : item
					)
				};
			}
		}

		case CART_REMOVE_ITEM: {
			return {
				...state,
				cartItems: state.cartItems.filter((item) => item._id !== payload)
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
