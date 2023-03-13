import {
  CREATE_RESERVATION_FAIL,
  CREATE_RESERVATION_REQUEST,
  CREATE_RESERVATION_SUCCESS,
  DELETE_RESERVATION_FAIL,
  DELETE_RESERVATION_REQUEST,
  DELETE_RESERVATION_SUCCESS,
  ONE_RESERVATION_FAIL,
  ONE_RESERVATION_REQUEST,
  ONE_RESERVATION_SUCCESS,
  ALL_RESERVATION_FAIL,
  ALL_RESERVATION_REQUEST,
  ALL_RESERVATION_SUCCESS,
  UPDATE_RESERVATION_FAIL,
  UPDATE_RESERVATION_REQUEST,
  UPDATE_RESERVATION_SUCCESS,
} from "../constants/reservationConstants";

export const reservationReducer = (state = {
  reservation: {}
}, action) => {
  switch (action.type) {
    case ONE_RESERVATION_REQUEST:
      return {
        loading: true,
        reservation: {},
      };
    case ONE_RESERVATION_SUCCESS:
      return {
        loading: false,
        reservation: action.payload === undefined ? {} : action.payload,
      };
    case ONE_RESERVATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_RESERVATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_RESERVATION_SUCCESS:
      return {
        loading: false,
        reservation: action.payload,
      };
    case CREATE_RESERVATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllReservationReducer = (
  state = {
    reservations: [],
  },
  action
) => {
  switch (action.type) {
    case ALL_RESERVATION_REQUEST:
      return {
        loading: true,
        reservations: [],
      };
    case ALL_RESERVATION_SUCCESS:
      return {
        loading: false,
        reservations: action.payload.data.reservations,
        reservationsCount: action.payload.productsCount,
      };
    case ALL_RESERVATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const editReservationReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_RESERVATION_REQUEST:
      return {
        ...state,
        loading: true,
        isUpdated: false,
      };
    case UPDATE_RESERVATION_SUCCESS:
      return {
        loading: false,
        isUpdated: true,
      };
    case UPDATE_RESERVATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_RESERVATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_RESERVATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
