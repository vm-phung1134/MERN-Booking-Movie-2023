import {
    ALL_CINEMA_REQUEST, 
    ALL_CINEMA_SUCCESS,
    ALL_CINEMA_FAIL,
    ONE_CINEMA_FAIL,
    ONE_CINEMA_REQUEST,
    ONE_CINEMA_SUCCESS
} from '../constants/cinemaConstants'

//REDUCER GET ALL CINEMAS
export const cinemaReducer = 
    (
        state = {
            cinemas: []
        } , 
        action
    ) => {
        switch(action.type){
        case ALL_CINEMA_REQUEST:
            return {
                loading: true,
                cinemas: []
            }
        case ALL_CINEMA_SUCCESS:
            return {
                loading: false,
                cinemas: action.payload,
            }
        case ALL_CINEMA_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }

    export const cinemaDetailReducer = 
    (
        state = {
            cinema: {}
        } , 
        action
    ) => {
        switch(action.type){
        case ONE_CINEMA_REQUEST:
            return {
                loading: true,
                cinema: {}
            }
        case ONE_CINEMA_SUCCESS:
            return {
                loading: false,
                cinema: action.payload,
            }
        case ONE_CINEMA_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }
