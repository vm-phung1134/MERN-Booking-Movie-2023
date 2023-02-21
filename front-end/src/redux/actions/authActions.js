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
} from "../constants/authConstants";

const baseURL = "http://localhost:5000"

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

export const authLogout = () => async (dispatch) => {
  try {
    await axios.get(`${baseURL}/api/v1/auth/logout`);
    dispatch({ type: AUTH_LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: AUTH_LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const authRegister =
  (name, email, password, phone, cardId, gender, position) =>
  async (dispatch) => {
    try {
      dispatch({ type: AUTH_REGISTER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `${baseURL}/api/v1/auth/register`,
        { name, email, password, phone, cardId, gender, position },
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
