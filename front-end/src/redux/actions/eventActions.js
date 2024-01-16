import axios from "axios";
import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUIRED,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  DELETE_EVENT_REQUIRED,
  DELETE_EVENT_SUCCESS,
  GET_ALL_EVENT_FAIL,
  GET_ALL_EVENT_REQUIRED,
  GET_ALL_EVENT_SUCCESS,
  GET_ONE_EVENT_FAIL,
  GET_ONE_EVENT_REQUIRED,
  GET_ONE_EVENT_SUCCESS,
  UPDATE_EVENT_FAIL,
  UPDATE_EVENT_REQUIRED,
  UPDATE_EVENT_SUCCESS,
} from "../constants/eventConstants";
const baseURL = 'https://mern-full-stack-booking-movie-api.vercel.app'
// const baseURL = "http://localhost:5000";

// ACTION GET ALL EVENT
export const getAllEvent = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_EVENT_REQUIRED });
    const { data } = await axios.get(`${baseURL}/api/v1/events`);
    dispatch({
      type: GET_ALL_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_EVENT_FAIL,
      payload: error,
    });
  }
};
// ACTION GET ONE EVENT
export const getOneEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ONE_EVENT_REQUIRED });
    const { data } = await axios.get(`${baseURL}/api/v1/events/${id}`);
    dispatch({
      type: GET_ONE_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_EVENT_FAIL,
      payload: error,
    });
  }
};
// ACTION UPDATE ONE EVENT
export const updateEvent = (id, values) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_EVENT_REQUIRED });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `${baseURL}/api/v1/events/${id}`,
      values,
      config
    );
    dispatch({
      type: UPDATE_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EVENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
// ACTION DELETE EVENT
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_EVENT_REQUIRED });
    const { data } = await axios.delete(`${baseURL}/api/v1/events/${id}`);
    dispatch({
      type: DELETE_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_EVENT_FAIL,
      payload: error,
    });
  }
};
// ACTION CREATE NEW EVENT
export const createEvent = (values) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_EVENT_REQUIRED });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseURL}/api/v1/events`,
      values,
      config
    );
    dispatch({
      type: CREATE_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_EVENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
