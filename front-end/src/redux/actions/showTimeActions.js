import axios from 'axios'

import {
    ALL_SHOWTIME_REQUEST, 
    ALL_SHOWTIME_SUCCESS,
    ALL_SHOWTIME_FAIL,
    ONE_SHOWTIME_FAIL,
    ONE_SHOWTIME_REQUEST,
    ONE_SHOWTIME_SUCCESS
} from '../constants/showTimeConstants'
const baseURL = "http://localhost:5000"

export const getAllShowTime = () => async (dispatch) => {
    try{
        dispatch({type: ALL_SHOWTIME_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/showtimes/`)
        dispatch({
            type: ALL_SHOWTIME_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_SHOWTIME_FAIL,
            payload: error
        })
    }
}

export const getOneShowTime = (id) => async (dispatch) => {
    try{
        dispatch({type: ONE_SHOWTIME_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/showtimes/${id}`)
        dispatch({
            type: ONE_SHOWTIME_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ONE_SHOWTIME_FAIL,
            payload: error
        })
    }
}

