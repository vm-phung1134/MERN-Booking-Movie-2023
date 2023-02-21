import {
    ALL_MOVIESOON_REQUEST, 
    ALL_MOVIESOON_SUCCESS,
    ALL_MOVIESOON_FAIL,
    ONE_MOVIESOON_FAIL,
    ONE_MOVIESOON_REQUEST,
    ONE_MOVIESOON_SUCCESS,
} from '../constants/movieSoonConstants'

//REDUCER GET ALL MOVIESOONS
export const getAllMovieSoonReducer = 
    (
        state = {
            movieSoons: []
        } , 
        action
    ) => {
        switch(action.type){
        case ALL_MOVIESOON_REQUEST:
            return {
                loading: true,
                movieSoons: []
            }
        case ALL_MOVIESOON_SUCCESS:
            return {
                loading: false,
                movieSoons: action.payload.movieSoons,
                movieSoonsCount: action.payload.productsCount
            }
        case ALL_MOVIESOON_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }

// REDUCER GET ONE MOVIESOON

export const getOneMovieSoonReducer = 
    (
        state = {
            movieSoon: {}
        } , 
        action
    ) => {
        switch(action.type){
        case ONE_MOVIESOON_REQUEST:
            return {
                loading: true,
                movieSoon: {}
            }
        case ONE_MOVIESOON_SUCCESS:
            return {
                loading: false,
                movieSoon: action.payload,
            }
        case ONE_MOVIESOON_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }



