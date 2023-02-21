import axios from 'axios'

import {
    ALL_MOVIESOON_FAIL,
    ALL_MOVIESOON_REQUEST,
    ALL_MOVIESOON_SUCCESS,
    ONE_MOVIESOON_FAIL,
    ONE_MOVIESOON_SUCCESS,
    ONE_MOVIESOON_REQUEST,
} from '../constants/movieSoonConstants'
const baseURL = "http://localhost:5000"

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
