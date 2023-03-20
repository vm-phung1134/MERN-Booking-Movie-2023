import axios from 'axios'

import {
    ALL_FOOD_REQUEST, 
    ALL_FOOD_SUCCESS,
    ALL_FOOD_FAIL,
    INCREMENT_FOOD,
    DECREMENT_FOOD,
    CREATE_FOOD_REQUEST,
    CREATE_FOOD_SUCCESS,
    CREATE_FOOD_FAIL,
    DELETE_FOOD_REQUEST,
    DELETE_FOOD_SUCCESS,
    DELETE_FOOD_FAIL,
    ONE_FOOD_REQUEST,
    ONE_FOOD_SUCCESS,
    ONE_FOOD_FAIL,
    UPDATE_FOOD_REQUEST,
    UPDATE_FOOD_SUCCESS,
    UPDATE_FOOD_FAIL
} from '../constants/foodConstants'
const baseURL = 'https://react-flix-booking-movie-backend.vercel.app'

export const getAllFood = () => async (dispatch) => {
    try{
        dispatch({type: ALL_FOOD_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/foods/`)
        dispatch({
            type: ALL_FOOD_SUCCESS,
            payload: data.foods
        })
    }catch(error){
        dispatch({
            type: ALL_FOOD_FAIL,
            payload: error
        })
    }
}

export const incrementFood = (id) => async (dispatch) => {
    return dispatch({
        type: INCREMENT_FOOD,
        payload: id
    })
}
export const decrementFood = (id) => async (dispatch) => {
    return dispatch({
        type: DECREMENT_FOOD,
        payload: id
    })
}

export const getOneFood = (id) => async (dispatch) => {
    try {
      dispatch({ type: ONE_FOOD_REQUEST });
      const { data } = await axios.get(`${baseURL}/api/v1/foods/${id}`);
      dispatch({
        type: ONE_FOOD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ONE_FOOD_FAIL,
        payload: error,
      });
    }
  };

export const createOneFood = (values) => async (dispatch) => {
    try {
        dispatch({type: CREATE_FOOD_REQUEST})
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const {data} = await axios.post(
            `${baseURL}/api/v1/foods`,
            values,
            config
        )
        dispatch({
            type: CREATE_FOOD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_FOOD_FAIL,
            payload: error.response.data.message
        })
    }
}

export const deleteOneFood = (id) => async (dispatch) => {
    try{
        
        dispatch({type: DELETE_FOOD_REQUEST})
        const {data} = await axios.delete(`${baseURL}/api/v1/foods/${id}`)
        dispatch({
            type: DELETE_FOOD_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: DELETE_FOOD_FAIL,
            payload: error
        })
    }
}

export const updateOneFood = (id, values) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_FOOD_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `${baseURL}/api/v1/foods/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_FOOD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_FOOD_FAIL,
        payload: error.response.data.message,
      });
    }
  };