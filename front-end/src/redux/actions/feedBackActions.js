import axios from 'axios'
import { ALL_FEEDBACK_FAIL, ALL_FEEDBACK_REQUIRED, ALL_FEEDBACK_SUCCESS, POST_FEEDBACK_FAIL, POST_FEEDBACK_REQUIRED, POST_FEEDBACK_SUCCESS, SEND_FEEDBACK_FAIL, SEND_FEEDBACK_REQUIRED, SEND_FEEDBACK_SUCCESS } from '../constants/feedBackConstants'


const baseURL = 'https://mern-full-stack-booking-movie-backend.vercel.app'

export const getAllFeedBack = () => async (dispatch) => {
    try{
        dispatch({type: ALL_FEEDBACK_REQUIRED})
        const {data} = await axios.get(`${baseURL}/api/v1/feedbacks`)
        dispatch({
            type: ALL_FEEDBACK_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_FEEDBACK_FAIL,
            payload: error
        })
    }
}

export const postOneFeedBack = (feedBack) => async (dispatch) => {
    try{
        
        dispatch({type: POST_FEEDBACK_REQUIRED})
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const {data} = await axios.post(
            `${baseURL}/api/v1/feedbacks/`,
            feedBack,
            config
            )
        dispatch({
            type: POST_FEEDBACK_SUCCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: POST_FEEDBACK_FAIL,
            payload: error
        })
    }
}

export const sendFeedBack = (values) => async (dispatch) => {
    try{
        
        dispatch({type: SEND_FEEDBACK_REQUIRED})
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const {data} = await axios.post(
            `${baseURL}/api/v1/feedbacks/sendEmail`,
            values,
            config
            )
        dispatch({
            type: SEND_FEEDBACK_SUCCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: SEND_FEEDBACK_FAIL,
            payload: error
        })
    }
}
