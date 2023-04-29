import axios from "axios";
import {
  DELETE_ONE_BLOG_REQUIRED,
  DELETE_ONE_BLOG_SUCCESS,
  DELETE_ONE_BLOG_FAIL,
  GET_ALL_BLOG_FAIL,
  GET_ALL_BLOG_REQUIRED,
  GET_ALL_BLOG_SUCCESS,
  GET_ONE_BLOG_FAIL,
  GET_ONE_BLOG_REQUIRED,
  GET_ONE_BLOG_SUCCESS,
  UPDATE_ONE_BLOG_FAIL,
  UPDATE_ONE_BLOG_REQUIRED,
  UPDATE_ONE_BLOG_SUCCESS,
  CREATE_ONE_BLOG_REQUIRED,
  CREATE_ONE_BLOG_SUCCESS,
  CREATE_ONE_BLOG_FAIL,
} from "../constants/blogConstants";
//const baseURL = 'https://mern-full-stack-booking-movie-api.vercel.app'
const baseURL = "http://localhost:5000";

// ACTION GET ALL BLOG
export const getAllBlog = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_BLOG_REQUIRED });
    const { data } = await axios.get(`${baseURL}/api/v1/blogs`);
    dispatch({
      type: GET_ALL_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_BLOG_FAIL,
      payload: error,
    });
  }
};
// ACTION GET ONE BLOG
export const getOneBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ONE_BLOG_REQUIRED });
    const { data } = await axios.get(`${baseURL}/api/v1/blogs/${id}`);
    dispatch({
      type: GET_ONE_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_BLOG_FAIL,
      payload: error,
    });
  }
};
// ACTION UPDATE ONE BLOG
export const updateOneBlog = (id, values) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ONE_BLOG_REQUIRED });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `${baseURL}/api/v1/blogs/${id}`,
      values,
      config
    );
    dispatch({
      type: UPDATE_ONE_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ONE_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};
// ACTION DELETE BLOG
export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ONE_BLOG_REQUIRED });
    const { data } = await axios.delete(`${baseURL}/api/v1/blogs/${id}`);
    dispatch({
      type: DELETE_ONE_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ONE_BLOG_FAIL,
      payload: error,
    });
  }
};
// ACTION CREATE NEW BLOG
export const createBlog = (values) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ONE_BLOG_REQUIRED });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseURL}/api/v1/blogs`,
      values,
      config
    );
    dispatch({
      type: CREATE_ONE_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ONE_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};
