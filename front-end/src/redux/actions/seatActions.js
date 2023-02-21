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
} from "../constants/seatConstants";
const baseURL = "http://localhost:5000"

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

export const getOneSeat = (id) => async (dispatch) => {
  try {
    dispatch({ type: ONE_SEAT_REQUEST });
    const { data } = await axios.get(
      `${baseURL}/api/v1/seats/${id}`
    );
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

export const updateStatusSeat = (idSeat, nameSeat) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    
    dispatch({ type: UPDATE_STATUS_REQUEST });
    const { data } = await axios.patch(
      `${baseURL}/api/v1/seats/${idSeat}`,
      {name: nameSeat},
      config
    );
    console.log(data)
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
