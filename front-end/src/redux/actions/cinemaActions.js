import axios from 'axios'

import {
    ALL_CINEMA_FAIL,
    ALL_CINEMA_REQUEST,
    ALL_CINEMA_SUCCESS,
    ONE_CINEMA_FAIL,
    ONE_CINEMA_REQUEST,
    ONE_CINEMA_SUCCESS
} from '../constants/cinemaConstants'
const baseURL = "http://localhost:5000"

export const getAllCinema = () => async (dispatch) => {
    try{
        dispatch({type: ALL_CINEMA_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/cinemas/detail`)
        dispatch({
            type: ALL_CINEMA_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_CINEMA_FAIL,
            payload: error
        })
    }
}
export const getOneCinema = (id) => async (dispatch) => {
    try{
        dispatch({type: ONE_CINEMA_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/cinemas/${id}`)
        dispatch({
            type: ONE_CINEMA_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ONE_CINEMA_FAIL,
            payload: error
        })
    }
}