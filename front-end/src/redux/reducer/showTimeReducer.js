import {
  ALL_SHOWTIME_REQUEST,
  ALL_SHOWTIME_SUCCESS,
  ALL_SHOWTIME_FAIL,
  ONE_SHOWTIME_FAIL,
  ONE_SHOWTIME_REQUEST,
  ONE_SHOWTIME_SUCCESS,
  CREATE_SHOWTIME_REQUEST,
  CREATE_SHOWTIME_SUCCESS,
  CREATE_SHOWTIME_FAIL,
} from "../constants/showTimeConstants";

//REDUCER GET ALL SHOWTIMES
export const showTimeReducer = (
  state = {
    showtimes: [],
  },
  action
) => {
  switch (action.type) {
    case ALL_SHOWTIME_REQUEST:
      return {
        loading: true,
        showtimes: [],
      };
    case ALL_SHOWTIME_SUCCESS:
      return {
        loading: false,
        showtimes: action.payload,
      };
    case ALL_SHOWTIME_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const showtimeDetailReducer = (
  state = {
    showtime: {},
  },
  action
) => {
  switch (action.type) {
    case ONE_SHOWTIME_REQUEST:
      return {
        loading: true,
        showtime: {},
      };
    case ONE_SHOWTIME_SUCCESS:
      return {
        loading: false,
        showtime: action.payload,
      };
    case ONE_SHOWTIME_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CREATE_SHOWTIME_REQUEST:
      return {
        loading: true,
        isCreated: false,
      };
    case CREATE_SHOWTIME_SUCCESS:
      return {
        loading: false,
        movie: action.payload,
        isCreated: true,
      };
    case CREATE_SHOWTIME_FAIL:
      return {
        loading: false,
        isCreated: false,
      };
    default:
      return state;
  }
};
