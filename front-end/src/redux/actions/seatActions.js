import axios from "axios";

import {
  ALL_SEAT_FAIL,
  ALL_SEAT_REQUEST,
  ALL_SEAT_SUCCESS,
  ONE_SEAT_FAIL,
  ONE_SEAT_SUCCESS,
  ONE_SEAT_REQUEST,
  UPDATE_STATUS_REQUEST,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_FAIL,
  CREATE_SEAT_REQUEST,
  CREATE_SEAT_SUCCESS,
  CREATE_SEAT_FAIL,
} from "../constants/seatConstants";
//const baseURL = 'https://mern-full-stack-booking-movie-api.vercel.app'
const baseURL = "http://localhost:5000";

// ACTION GET ALL LIST OF SEAT
export const getAllSeat = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SEAT_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/seats`);
    dispatch({
      type: ALL_SEAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_SEAT_FAIL,
      payload: error,
    });
  }
};
// ACTION GET ONE LIST OF SEAT
export const getOneSeat = (id) => async (dispatch) => {
  try {
    dispatch({ type: ONE_SEAT_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/seats/${id}`);
    dispatch({
      type: ONE_SEAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ONE_SEAT_FAIL,
      payload: error,
    });
  }
};
// ACTION UPDATE STATUS WHEN ONE USER RESERVATION
export const updateStatusSeat = (idSeat, nameSeat) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    dispatch({ type: UPDATE_STATUS_REQUEST });
    const { data } = await axios.patch(
      `${baseURL}/api/v1/seats/${idSeat}`,
      { name: nameSeat },
      config
    );
    console.log(data);
    dispatch({
      type: UPDATE_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_STATUS_FAIL,
      payload: error,
    });
  }
};
// ACTION CREATE NEW LIST OF SEAT
export const createSeat = (startTimeId, seats) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SEAT_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseURL}/api/v1/seats/${startTimeId}`,
      seats,
      config
    );
    dispatch({
      type: CREATE_SEAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SEAT_FAIL,
      payload: error.response.data.message,
    });
  }
};
// ACTION UPDATE LIST OF SEAT
export const updateNewSeat = (seatId, values) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    dispatch({ type: UPDATE_STATUS_REQUEST });
    const { data } = await axios.put(
      `${baseURL}/api/v1/seats/${seatId}`,
      { values },
      config
    );
    console.log(data);
    dispatch({
      type: UPDATE_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_STATUS_FAIL,
      payload: error,
    });
  }
};
