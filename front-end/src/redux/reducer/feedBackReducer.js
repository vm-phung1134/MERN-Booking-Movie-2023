import {
  ALL_FEEDBACK_FAIL,
  ALL_FEEDBACK_REQUIRED,
  ALL_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAIL,
  POST_FEEDBACK_REQUIRED,
  POST_FEEDBACK_SUCCESS,
  SEND_FEEDBACK_FAIL,
  SEND_FEEDBACK_REQUIRED,
  SEND_FEEDBACK_SUCCESS,
} from "../constants/feedBackConstants";

export const feedBackReducer = (
  state = {
    feedBack: {},
  },
  action
) => {
  switch (action.type) {
    case POST_FEEDBACK_REQUIRED:
      return {
        loading: true,
        feedBack: {},
      };
    case POST_FEEDBACK_SUCCESS:
      return {
        loading: false,
        feedBack: action.payload,
      };
    case POST_FEEDBACK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case SEND_FEEDBACK_REQUIRED:
      return {
        loading: true,
        feedBack: {},
      };
    case SEND_FEEDBACK_SUCCESS:
      return {
        loading: false,
        feedBack: action.payload,
      };
    case SEND_FEEDBACK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllFeedBackReducer = (
  state = {
    feedbacks: [],
  },
  action
) => {
  switch (action.type) {
    case ALL_FEEDBACK_REQUIRED:
      return {
        loading: true,
        feedbacks: [],
      };
    case ALL_FEEDBACK_SUCCESS:
      return {
        loading: false,
        feedbacks: action.payload === undefined ? {} : action.payload,
      };
    case ALL_FEEDBACK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
