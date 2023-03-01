import axios from 'axios'

import {
    ALL_CINEMA_FAIL,
    ALL_CINEMA_REQUEST,
    ALL_CINEMA_SUCCESS,
    CREATE_CINEMA_FAIL,
    CREATE_CINEMA_REQUEST,
    CREATE_CINEMA_SUCCESS,
    DELETE_CINEMA_FAIL,
    DELETE_CINEMA_REQUEST,
    DELETE_CINEMA_SUCCESS,
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

export const createCinema = (values) => async (dispatch) => {
    try {
        dispatch({type: CREATE_CINEMA_REQUEST})
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const {data} = await axios.post(
            `${baseURL}/api/v1/cinemas`,
            values,
            config
        )
        dispatch({
            type: CREATE_CINEMA_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_CINEMA_FAIL,
            payload: error.response.data.message
        })
    }
}

export const deleteOneCinema = (id) => async (dispatch) => {
    try{
        
        dispatch({type: DELETE_CINEMA_REQUEST})
        const {data} = await axios.delete(`${baseURL}/api/v1/cinemas/${id}`)
        dispatch({
            type: DELETE_CINEMA_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: DELETE_CINEMA_FAIL,
            payload: error
        })
    }
}