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
  UPDATE_SHOWTIME_REQUEST,
  UPDATE_SHOWTIME_SUCCESS,
  UPDATE_SHOWTIME_FAIL,
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
        showtimes: action.payload === undefined ? [] : action.payload,
      };
    case ALL_SHOWTIME_FAIL:
      return {
        ...state,
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
        showtime: action.payload === undefined ? {} : action.payload,
      };
    case ONE_SHOWTIME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_SHOWTIME_REQUEST:
      return {
        ...state,
        loading: true,
        isCreated: false,
      };
    case CREATE_SHOWTIME_SUCCESS:
      return {
        loading: false,
        showtime: action.payload,
        isCreated: true,
      };
    case CREATE_SHOWTIME_FAIL:
      return {
        ...state,
        loading: false,
        isCreated: false,
      };
    default:
      return state;
  }
};

export const showTimeEditReducer = (
  state = {}, 
  action
  ) => {
  switch (action.type) {
    // UPDATE CINEMA INFOMATION REDUCER
    case UPDATE_SHOWTIME_REQUEST:
      return {
        ...state,
        loading: true,
        isUpdated: false
      };
    case UPDATE_SHOWTIME_SUCCESS:
      return {
        loading: false,
        isUpdated: true,
      };
    case UPDATE_SHOWTIME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

