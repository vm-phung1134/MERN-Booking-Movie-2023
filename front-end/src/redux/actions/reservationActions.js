import axios from 'axios'

import {
    CREATE_RESERVATION_FAIL,
    CREATE_RESERVATION_REQUEST,
    CREATE_RESERVATION_SUCCESS,
    DELETE_RESERVATION_FAIL,
    DELETE_RESERVATION_REQUEST,
    DELETE_RESERVATION_SUCCESS,
    ONE_RESERVATION_FAIL,
    ONE_RESERVATION_REQUEST,
    ONE_RESERVATION_SUCCESS
} from '../constants/reservationConstants'
const baseURL = "http://localhost:5000"

export const createReservation = (reservation) => async (dispatch) => {
    try {
        dispatch({type: CREATE_RESERVATION_REQUEST})
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
        }
        const {data} = await axios.post(
            `${baseURL}/api/v1/reservations`,
            reservation,
            config
        )
        dispatch({
            type: CREATE_RESERVATION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_RESERVATION_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getAllReservation = () => async (dispatch) => {
    try{
        dispatch({type: ONE_RESERVATION_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/reservations`)
        dispatch({
            type: ONE_RESERVATION_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ONE_RESERVATION_FAIL,
            payload: error
        })
    }
}

export const deleteTicket = (id) => async (dispatch) => {
    try{
        
        dispatch({type: DELETE_RESERVATION_REQUEST})
        const {data} = await axios.delete(`${baseURL}/api/v1/reservations/${id}`)
        dispatch({
            type: DELETE_RESERVATION_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: DELETE_RESERVATION_FAIL,
            payload: error
        })
    }
}
