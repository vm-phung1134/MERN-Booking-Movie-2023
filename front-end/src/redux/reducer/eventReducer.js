import { 
    GET_ALL_EVENT_FAIL, 
    GET_ALL_EVENT_REQUIRED, 
    GET_ALL_EVENT_SUCCESS, 
    GET_ONE_EVENT_FAIL, 
    GET_ONE_EVENT_REQUIRED, 
    GET_ONE_EVENT_SUCCESS 
} 
from '../constants/eventConstants'

//REDUCER GET ALL CINEMAS
export const eventReducer = 
    (
        state = {
            events: []
        } , 
        action
    ) => {
        switch(action.type){
        case GET_ALL_EVENT_REQUIRED:
            return {
                loading: true,
                events: []
            }
        case GET_ALL_EVENT_SUCCESS:
            return {
                loading: false,
                events: action.payload.events,
            }
        case GET_ALL_EVENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }

    export const eventDetailReducer = 
    (
        state = {
            event: {}
        } , 
        action
    ) => {
        switch(action.type){
        case GET_ONE_EVENT_REQUIRED:
            return {
                loading: true,
                event: {}
            }
        case GET_ONE_EVENT_SUCCESS:
            return {
                loading: false,
                event: action.payload,
            }
        case GET_ONE_EVENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }
