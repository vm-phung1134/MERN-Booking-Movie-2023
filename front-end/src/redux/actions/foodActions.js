import axios from 'axios'

import {
    ALL_FOOD_REQUEST, 
    ALL_FOOD_SUCCESS,
    ALL_FOOD_FAIL,
    INCREMENT_FOOD,
    DECREMENT_FOOD
} from '../constants/foodConstants'
const baseURL = "http://localhost:5000"

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