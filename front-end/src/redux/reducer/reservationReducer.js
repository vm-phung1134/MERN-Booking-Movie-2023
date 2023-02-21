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

export const newReservationReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_RESERVATION_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case CREATE_RESERVATION_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }
        case CREATE_RESERVATION_FAIL:
            return{
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const getAllReservationReducer = 
    (
        state = {
            reservations: []
        } , 
        action
    ) => {
        switch(action.type){
        case ONE_RESERVATION_REQUEST:
            return {
                loading: true,
                reservations: []
            }
        case ONE_RESERVATION_SUCCESS:
            return {
                loading: false,
                reservations: action.payload.data.reservations,
                reservationsCount: action.payload.productsCount
            }
        case ONE_RESERVATION_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }

    export const editReservationReducer = 
    (
        state = {
        } , 
        action
    ) => {
        switch(action.type){
        case DELETE_RESERVATION_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case DELETE_RESERVATION_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }
        case DELETE_RESERVATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }
