import {
  ALL_SEAT_REQUEST,
  ALL_SEAT_SUCCESS,
  ALL_SEAT_FAIL,
  ONE_SEAT_FAIL,
  ONE_SEAT_REQUEST,
  ONE_SEAT_SUCCESS,
} from "../constants/seatConstants";

//REDUCER GET ALL SEATS
export const seatsReducer = (
  state = {
    seats: [],
  },
  action
) => {
  switch (action.type) {
    case ALL_SEAT_REQUEST:
      return {
        loading: true,
        seats: [],
      };
    case ALL_SEAT_SUCCESS:
      return {
        loading: false,
        seats: action.payload.seats,
        seatsCount: action.payload.productsCount,
      };
    case ALL_SEAT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// REDUCER GET ONE SEAT

export const seatDetailReducer = (
  state = {
    seat: {},
  },
  action
) => {
  switch (action.type) {
    case ONE_SEAT_REQUEST:
      return {
        loading: true,
        seat: {},
      };
    case ONE_SEAT_SUCCESS:
      return {
        loading: false,
        seat: action.payload,
      };
    case ONE_SEAT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
