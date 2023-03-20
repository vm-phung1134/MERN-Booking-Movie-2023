import axios from 'axios'

import {
    ALL_MOVIESOON_FAIL,
    ALL_MOVIESOON_REQUEST,
    ALL_MOVIESOON_SUCCESS,
    ONE_MOVIESOON_FAIL,
    ONE_MOVIESOON_SUCCESS,
    ONE_MOVIESOON_REQUEST,
    CREATE_MOVIESOON_REQUEST,
    CREATE_MOVIESOON_SUCCESS,
    CREATE_MOVIESOON_FAIL,
    DELETE_MOVIESOON_REQUEST,
    DELETE_MOVIESOON_SUCCESS,
    DELETE_MOVIESOON_FAIL,
    UPDATE_MOVIESOON_REQUEST,
    UPDATE_MOVIESOON_SUCCESS,
    UPDATE_MOVIESOON_FAIL,
} from '../constants/movieSoonConstants'
const baseURL = 'https://mern-full-stack-booking-movie-backend.vercel.app'

export const getAllMovieSoon = () => async (dispatch) => {
    try{
        dispatch({type: ALL_MOVIESOON_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/moviesoons`)
        dispatch({
            type: ALL_MOVIESOON_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_MOVIESOON_FAIL,
            payload: error
        })
    }
}

export const getOneMovieSoon = (id) => async (dispatch) => {
    try{
        
        dispatch({type: ONE_MOVIESOON_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/moviesoons/${id}`)
        dispatch({
            type: ONE_MOVIESOON_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ONE_MOVIESOON_FAIL,
            payload: error
        })
    }
}

export const createMovieSoon = (values) => async (dispatch) => {
    try {
        dispatch({type: CREATE_MOVIESOON_REQUEST})
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const {data} = await axios.post(
            `${baseURL}/api/v1/moviesoons`,
            values,
            config
        )
        dispatch({
            type: CREATE_MOVIESOON_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_MOVIESOON_FAIL,
            payload: error.response.data.message
        })
    }
}

export const deleteOneMovieSoon = (id) => async (dispatch) => {
    try{
        
        dispatch({type: DELETE_MOVIESOON_REQUEST})
        const {data} = await axios.delete(`${baseURL}/api/v1/moviesoons/${id}`)
        dispatch({
            type: DELETE_MOVIESOON_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: DELETE_MOVIESOON_FAIL,
            payload: error
        })
    }
}

export const updateOneMovieSoon = (id, values) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_MOVIESOON_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `${baseURL}/api/v1/moviesoons/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_MOVIESOON_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_MOVIESOON_FAIL,
        payload: error.response.data.message,
      });
    }
  };