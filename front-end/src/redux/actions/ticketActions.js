import axios from 'axios'

import {
    ALL_TICKET_REQUEST, 
    ALL_TICKET_SUCCESS,
    ALL_TICKET_FAIL,
    ONE_TICKET_FAIL,
    ONE_TICKET_REQUEST,
    ONE_TICKET_SUCCESS,
    INCREMENT, DECREMENT
} from '../constants/ticketConstants'
const baseURL = "http://localhost:5000"

export const getAllTicket = () => async (dispatch) => {
    try{
        dispatch({type: ALL_TICKET_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/tickets/`)
        dispatch({
            type: ALL_TICKET_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_TICKET_FAIL,
            payload: error
        })
    }
}
export const getOneTicket = (id) => async (dispatch) => {
    try{
        dispatch({type: ONE_TICKET_REQUEST})
        const {data} = await axios.get(`${baseURL}/api/v1/tickets/${id}`)
        dispatch({
            type: ONE_TICKET_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ONE_TICKET_FAIL,
            payload: error
        })
    }
}

export const increment = (id) => async (dispatch) => {
    return dispatch({
        type: INCREMENT,
        payload: id
    })
}
export const decrement = (id) => async (dispatch) => {
    return dispatch({
        type: DECREMENT,
        payload: id
    })
}
