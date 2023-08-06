import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { populateCart } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const addToCart = async (dispatch, productID, quantity, color, size) => {
  try {
    const data = { productID, quantity, color, size };
    const res = await userRequest.post("/cart/add", data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCartData = async (dispatch, user) => {
  try {
    const res = await userRequest.get(`/cart/find/${user._id}`);
    console.log(res.data);
    dispatch(populateCart(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const updateCart = async (dispatch, user) => {
  try {
    const res = await userRequest.put(`/cart/${user._id}`, {
      userID: user._id,
      username: user.username,
      products: [],
    });
    console.log(res);
  } catch (err) {}
};
