import axios from "axios";

import {
  ALL_CINEMA_FAIL,
  ALL_CINEMA_REQUEST,
  ALL_CINEMA_SUCCESS,
  CREATE_CINEMA_FAIL,
  CREATE_CINEMA_REQUEST,
  CREATE_CINEMA_SUCCESS,
  DELETE_CINEMA_FAIL,
  DELETE_CINEMA_REQUEST,
  DELETE_CINEMA_SUCCESS,
  ONE_CINEMA_FAIL,
  ONE_CINEMA_REQUEST,
  ONE_CINEMA_SUCCESS,
  UPDATE_CINEMA_FAIL,
  UPDATE_CINEMA_REQUEST,
  UPDATE_CINEMA_SUCCESS,
} from "../constants/cinemaConstants";
//const baseURL = 'https://mern-full-stack-booking-movie-api.vercel.app'
const baseURL = "http://localhost:5000";

// ACTION GET ALL CINEMA
export const getAllCinema = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CINEMA_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/cinemas/detail`);
    dispatch({
      type: ALL_CINEMA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CINEMA_FAIL,
      payload: error,
    });
  }
};
// ACTION GET ONE CINEMA
export const getOneCinema = (id) => async (dispatch) => {
  try {
    dispatch({ type: ONE_CINEMA_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/cinemas/${id}`);
    dispatch({
      type: ONE_CINEMA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ONE_CINEMA_FAIL,
      payload: error,
    });
  }
};
// ACTION CREATE NEW CINEMA
export const createCinema = (values) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CINEMA_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseURL}/api/v1/cinemas`,
      values,
      config
    );
    dispatch({
      type: CREATE_CINEMA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CINEMA_FAIL,
      payload: error.response.data.message,
    });
  }
};
// ACTION DELETE ONE CINEMA
export const deleteOneCinema = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CINEMA_REQUEST });
    const { data } = await axios.delete(`${baseURL}/api/v1/cinemas/${id}`);
    dispatch({
      type: DELETE_CINEMA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CINEMA_FAIL,
      payload: error,
    });
  }
};
// ACTION UPDATE ONE CINEMA
export const updateOneCinema = (id, values) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CINEMA_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `${baseURL}/api/v1/cinemas/${id}`,
      values,
      config
    );
    dispatch({
      type: UPDATE_CINEMA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CINEMA_FAIL,
      payload: error.response.data.message,
    });
  }
};
