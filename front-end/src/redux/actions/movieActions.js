import axios from 'axios'

import {
    ALL_MOVIE_FAIL,
    ALL_MOVIE_REQUEST,
    ALL_MOVIE_SUCCESS,
    ONE_MOVIE_FAIL,
    ONE_MOVIE_SUCCESS,
    ONE_MOVIE_REQUEST,
    CREATE_MOVIE_REQUEST,
    CREATE_MOVIE_SUCCESS,
    CREATE_MOVIE_FAIL,
    UPDATE_MOVIE_REQUEST,
    UPDATE_MOVIE_SUCCESS,
    UPDATE_MOVIE_FAIL,
} from '../constants/movieConstants'
const baseURL = "http://localhost:5000"

export const getAllMovie = () => async (dispatch) => {
    try{
        dispatch({type: ALL_MOVIE_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/movies`)
        dispatch({
            type: ALL_MOVIE_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_MOVIE_FAIL,
            payload: error
        })
    }
}

export const createMovie = (values) => async (dispatch) => {
    try {
        dispatch({type: CREATE_MOVIE_REQUEST})
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const {data} = await axios.post(
            `${baseURL}/api/v1/movies`,
            values,
            config
        )
        dispatch({
            type: CREATE_MOVIE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_MOVIE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const updateMovie = (id,values) => async (dispatch) => {
    try {
        dispatch({type: UPDATE_MOVIE_REQUEST})
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const {data} = await axios.put(
            `${baseURL}/api/v1/movies/${id}`,
            values,
            config
        )
        dispatch({
            type: UPDATE_MOVIE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_MOVIE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getOneMovie = (id) => async (dispatch) => {
    try{
        
        dispatch({type: ONE_MOVIE_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/movies/${id}`)
        dispatch({
            type: ONE_MOVIE_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ONE_MOVIE_FAIL,
            payload: error
        })
    }
}
