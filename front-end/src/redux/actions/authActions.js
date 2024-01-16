import axios from "axios";

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAIL,
  AUTH_REGISTER_FAIL,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_REQUEST,
  AUTH_GETALLUSER_SUCCESS,
  AUTH_GETALLUSER_REQUEST,
  AUTH_GETALLUSER_FAIL,
  AUTH_GETONEUSER_REQUEST,
  AUTH_GETONEUSER_SUCCESS,
  AUTH_GETONEUSER_FAIL,
  AUTH_UPDATE_FAIL,
  AUTH_UPDATE_SUCCESS,
  AUTH_UPDATE_REQUEST,
  AUTH_CHANGEPW_FAIL,
  AUTH_CHANGEPW_REQUEST,
  AUTH_CHANGEPW_SUCCESS,
  CLEAR_ERRORS,
  AUTH_DELETE_REQUEST,
  AUTH_DELETE_SUCCESS,
  AUTH_DELETE_FAIL,
  AUTH_FORGOTPW_REQUEST,
  AUTH_FORGOTPW_SUCCESS,
  AUTH_FORGOTPW_FAIL,
  AUTH_UPDATENEWPW_REQUEST,
  AUTH_UPDATENEWPW_SUCCESS,
  AUTH_UPDATENEWPW_FAIL,
} from "../constants/authConstants";

const baseURL = 'https://mern-full-stack-booking-movie-api.vercel.app'
// const baseURL = "http://localhost:5000";

// ACTION LOGIN
export const authLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseURL}/api/v1/auth/login`,
      { email, password },
      config
    );
    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
// ACTION LOG OUT
export const authLogout = () => async (dispatch) => {
  try {
    await axios.get(`${baseURL}/api/v1/auth/logout`);
    dispatch({ type: AUTH_LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: AUTH_LOGOUT_FAIL, payload: error.response.data.message });
  }
};
// CLEAR ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
// ACTION REGISTER
export const authRegister = (values) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REGISTER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${baseURL}/api/v1/auth/register`,
      values,
      config
    );
    dispatch({
      type: AUTH_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};
// ACTION GET ALL USER
export const getAllUser = () => async (dispatch) => {
  try {
    dispatch({ type: AUTH_GETALLUSER_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/auth/user`);
    dispatch({
      type: AUTH_GETALLUSER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_GETALLUSER_FAIL,
      payload: error,
    });
  }
};
// ACTION GET ONE USER
export const getOneUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_GETONEUSER_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/auth/user/${id}`);
    dispatch({
      type: AUTH_GETONEUSER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_GETONEUSER_FAIL,
      payload: error,
    });
  }
};
// ACTION UPDATE USER
export const updateOneUser = (id, user) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_UPDATE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `${baseURL}/api/v1/auth/user/${id}`,
      user,
      config
    );
    dispatch({
      type: AUTH_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};
// ACTION DELETE USER
export const deleteOneUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_DELETE_REQUEST });
    const { data } = await axios.delete(`${baseURL}/api/v1/auth/user/${id}`);
    dispatch({
      type: AUTH_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_DELETE_FAIL,
      payload: error,
    });
  }
};
// ACTION CHANGE PASSWORD
export const changePasswordUser =
  (id, passwordCurrent, passwordNew) => async (dispatch) => {
    try {
      dispatch({ type: AUTH_CHANGEPW_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.patch(
        `${baseURL}/api/v1/auth/user/${id}`,
        { passwordCurrent, passwordNew },
        config
      );
      dispatch({
        type: AUTH_CHANGEPW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_CHANGEPW_FAIL,
        payload: error.response.data.message,
      });
    }
  };
// ACTION WHEN USER FORGOT PASSWORD
export const forgotPassword = (values) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_FORGOTPW_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${baseURL}/api/v1/auth/forgot-password`,
      values,
      config
    );
    dispatch({
      type: AUTH_FORGOTPW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FORGOTPW_FAIL,
      payload: error.response.data.message,
    });
  }
};
// ACTION UPDATE NEW PASSWORD WHEN USER FORGOT PASSWORD
export const updateNewPasswordUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_UPDATENEWPW_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.patch(
      `${baseURL}/api/v1/auth/forgot-password`,
      { email, password },
      config
    );
    dispatch({
      type: AUTH_UPDATENEWPW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_UPDATENEWPW_FAIL,
      payload: error.response.data.message,
    });
  }
};
