import axios from "axios";

import {
  ALL_SHOWTIME_REQUEST,
  ALL_SHOWTIME_SUCCESS,
  ALL_SHOWTIME_FAIL,
  ONE_SHOWTIME_FAIL,
  ONE_SHOWTIME_REQUEST,
  ONE_SHOWTIME_SUCCESS,
  CREATE_SHOWTIME_REQUEST,
  CREATE_SHOWTIME_SUCCESS,
  CREATE_SHOWTIME_FAIL,
} from "../constants/showTimeConstants";
const baseURL = "http://localhost:5000";

export const getAllShowTime = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SHOWTIME_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/showtimes/`);
    dispatch({
      type: ALL_SHOWTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_SHOWTIME_FAIL,
      payload: error,
    });
  }
};

export const getOneShowTime = (id) => async (dispatch) => {
  try {
    dispatch({ type: ONE_SHOWTIME_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/showtimes/${id}`);
    dispatch({
      type: ONE_SHOWTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ONE_SHOWTIME_FAIL,
      payload: error,
    });
  }
};

export const createShowTime =
  ( cinemaId, movieId,  values) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_SHOWTIME_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${baseURL}/api/v1/showtimes/${cinemaId}&${movieId}`,
        values,
        config
      );
      dispatch({
        type: CREATE_SHOWTIME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_SHOWTIME_FAIL,
        payload: error.response.data.message,
      });
    }
  };
