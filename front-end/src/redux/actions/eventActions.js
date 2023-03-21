import axios from "axios"
import { 
    GET_ALL_EVENT_FAIL, 
    GET_ALL_EVENT_REQUIRED, 
    GET_ALL_EVENT_SUCCESS, 
    GET_ONE_EVENT_FAIL, 
    GET_ONE_EVENT_REQUIRED, 
    GET_ONE_EVENT_SUCCESS 
} from "../constants/eventConstants"
const baseURL = 'https://mern-full-stack-booking-movie-api.vercel.app'
//const baseURL = 'http://localhost:5000'
export const getAllEvent= () => async (dispatch) => {
    try{
        dispatch({type: GET_ALL_EVENT_REQUIRED})
        const {data} = await axios.get(`${baseURL}/api/v1/events`)
        dispatch({
            type: GET_ALL_EVENT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_ALL_EVENT_FAIL,
            payload: error
        })
    }
}

export const getOneEvent = (id) => async (dispatch) => {
    try{
        dispatch({type: GET_ONE_EVENT_REQUIRED})
        const {data} = await axios.get(`${baseURL}/api/v1/events/${id}`)
        dispatch({
            type: GET_ONE_EVENT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_ONE_EVENT_FAIL,
            payload: error
        })
    }
}