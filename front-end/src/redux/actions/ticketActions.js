import axios from "axios";

import {
  ALL_TICKET_REQUEST,
  ALL_TICKET_SUCCESS,
  ALL_TICKET_FAIL,
  ONE_TICKET_FAIL,
  ONE_TICKET_REQUEST,
  ONE_TICKET_SUCCESS,
  INCREMENT,
  DECREMENT,
  CREATE_TICKET_REQUEST,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_FAIL,
  DELETE_TICKET_REQUEST,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_FAIL,
} from "../constants/ticketConstants";
const baseURL = "http://localhost:5000";

export const getAllTicket = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_TICKET_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/tickets/`);
    dispatch({
      type: ALL_TICKET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_TICKET_FAIL,
      payload: error,
    });
  }
};
export const getOneTicket = (id) => async (dispatch) => {
  try {
    dispatch({ type: ONE_TICKET_REQUEST });
    const { data } = await axios.get(`${baseURL}/api/v1/tickets/${id}`);
    dispatch({
      type: ONE_TICKET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ONE_TICKET_FAIL,
      payload: error,
    });
  }
};

export const increment = (id) => async (dispatch) => {
  return dispatch({
    type: INCREMENT,
    payload: id,
  });
};
export const decrement = (id) => async (dispatch) => {
  return dispatch({
    type: DECREMENT,
    payload: id,
  });
};

export const createOneTicket = (values) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_TICKET_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseURL}/api/v1/tickets`,
      values,
      config
    );
    dispatch({
      type: CREATE_TICKET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_TICKET_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const deleteOneTicket = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TICKET_REQUEST });
    const { data } = await axios.delete(`${baseURL}/api/v1/tickets/${id}`);
    dispatch({
      type: DELETE_TICKET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TICKET_FAIL,
      payload: error,
    });
  }
};
