import {
  ALL_MOVIE_REQUEST,
  ALL_MOVIE_SUCCESS,
  ALL_MOVIE_FAIL,
  ONE_MOVIE_FAIL,
  ONE_MOVIE_REQUEST,
  ONE_MOVIE_SUCCESS,
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAIL,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAIL
} from "../constants/movieConstants";

//REDUCER GET ALL MOVIES
export const moviesReducer = (
  state = {
    movies: [],
  },
  action
) => {
  switch (action.type) {
    case ALL_MOVIE_REQUEST:
      return {
        loading: true,
        movies: [],
      };
    case ALL_MOVIE_SUCCESS:
      return {
        loading: false,
        movies: action.payload.movies === undefined ? [] : action.payload.movies,
        moviesCount: action.payload.productsCount,
      };
    case ALL_MOVIE_FAIL:
      return {
        ...state,
        moviesCount: 0,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// REDUCER GET ONE MOVIE

export const movieDetailReducer = (
  state = {
    movie: {},
  },
  action
) => {
  switch (action.type) {
    case ONE_MOVIE_REQUEST:
      return {
        loading: true,
        movie: {},
      };
    case ONE_MOVIE_SUCCESS:
      return {
        loading: false,
        movie: action.payload === undefined ? {} : action.payload,
      };
    case ONE_MOVIE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CREATE_MOVIE_REQUEST:
      return {
        loading: true,
        isCreated: false,
      };
    case CREATE_MOVIE_SUCCESS:
      return {
        loading: false,
        movie: action.payload,
        isCreated: true,
      };
    case CREATE_MOVIE_FAIL:
      return {
        loading: false,
        isCreated: false,
      };
    default:
      return state;
  }
};

export const movieEditReducer = (
  state = {}, 
  action
  ) => {
  switch (action.type) {
    // UPDATE CINEMA INFOMATION REDUCER
    case UPDATE_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        isUpdated: false
      };
    case UPDATE_MOVIE_SUCCESS:
      return {
        loading: false,
        isUpdated: true,
      };
    case UPDATE_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
