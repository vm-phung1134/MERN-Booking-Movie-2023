import {
  ALL_MOVIESOON_REQUEST,
  ALL_MOVIESOON_SUCCESS,
  ALL_MOVIESOON_FAIL,
  ONE_MOVIESOON_FAIL,
  ONE_MOVIESOON_REQUEST,
  ONE_MOVIESOON_SUCCESS,
  CREATE_MOVIESOON_REQUEST,
  CREATE_MOVIESOON_SUCCESS,
  CREATE_MOVIESOON_FAIL,
  UPDATE_MOVIESOON_REQUEST,
  UPDATE_MOVIESOON_SUCCESS,
  UPDATE_MOVIESOON_FAIL,
} from "../constants/movieSoonConstants";

//REDUCER GET ALL MOVIESOONS
export const getAllMovieSoonReducer = (
  state = {
    movieSoons: [],
  },
  action
) => {
  switch (action.type) {
    case ALL_MOVIESOON_REQUEST:
      return {
        loading: true,
        movieSoons: [],
      };
    case ALL_MOVIESOON_SUCCESS:
      return {
        loading: false,
        movieSoons: action.payload.movieSoons === undefined ? [] : action.payload.movieSoons,
        movieSoonsCount: action.payload.productsCount,
      };
    case ALL_MOVIESOON_FAIL:
      return {
        ...state,
        movieSoonsCount: 0,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// REDUCER GET ONE MOVIESOON

export const getOneMovieSoonReducer = (
  state = {
    movieSoon: {},
  },
  action
) => {
  switch (action.type) {
    case ONE_MOVIESOON_REQUEST:
      return {
        loading: true,
        movieSoon: {},
      };
    case ONE_MOVIESOON_SUCCESS:
      return {
        loading: false,
        movieSoon: action.payload === undefined ? {} : action.payload,
      };
    case ONE_MOVIESOON_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CREATE_MOVIESOON_REQUEST:
      return {
        loading: true,
        isCreated: false,
      };
    case CREATE_MOVIESOON_SUCCESS:
      return {
        loading: false,
        movieSoon: action.payload,
        isCreated: true,
      };
    case CREATE_MOVIESOON_FAIL:
      return {
        loading: false,
        isCreated: false,
      };
    default:
      return state;
  }
};

export const movieSoonEditReducer = (
  state = {}, 
  action
  ) => {
  switch (action.type) {
    // UPDATE MOVIE INFOMATION REDUCER
    case UPDATE_MOVIESOON_REQUEST:
      return {
        ...state,
        loading: true,
        isUpdated: false
      };
    case UPDATE_MOVIESOON_SUCCESS:
      return {
        loading: false,
        isUpdated: true,
      };
    case UPDATE_MOVIESOON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
