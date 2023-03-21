import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_FAIL,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL,
  CLEAR_ERRORS,
  AUTH_GETALLUSER_REQUEST,
  AUTH_GETALLUSER_SUCCESS,
  AUTH_GETALLUSER_FAIL,
  AUTH_GETONEUSER_REQUEST,
  AUTH_GETONEUSER_SUCCESS,
  AUTH_GETONEUSER_FAIL,
  AUTH_UPDATE_REQUEST,
  AUTH_UPDATE_SUCCESS,
  AUTH_UPDATE_FAIL,
  AUTH_CHANGEPW_REQUEST,
  AUTH_CHANGEPW_SUCCESS,
  AUTH_CHANGEPW_FAIL,
  AUTH_FORGOTPW_REQUEST,
  AUTH_FORGOTPW_SUCCESS,
  AUTH_FORGOTPW_FAIL,
} from "../constants/authConstants";

//REDUCER GET USER
export const userReducer = (
  state = {
    user: {},
  },
  action
) => {
  switch (action.type) {
    // USER LOGIN & USER REGISTER
    case AUTH_LOGIN_REQUEST:
    case AUTH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case AUTH_LOGIN_SUCCESS:
    case AUTH_REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload === undefined ? {} : action.payload,
        isAuthenticated: true,
      };
    case AUTH_LOGIN_FAIL:
    case AUTH_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errorLogin: action.payload,
      };
    // USER LOGOUT
    case AUTH_LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case AUTH_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // GET CODE TO UPDATE NEW PASSWORD
    case AUTH_FORGOTPW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_FORGOTPW_SUCCESS:
      return {
        loading: false,
        code: action.payload,
      };
    case AUTH_FORGOTPW_FAIL:
      return {
        ...state,
        loading: false,
        errorChangePw: action.payload,
      };
    // CLEAR ERRORS
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        errorLogin: null,
        success: false,
      };
    default:
      return state;
  }
};

// GET ALL USERS
export const getAllReducer = (
  state = {
    users: [],
  },
  action
) => {
  switch (action.type) {
    case AUTH_GETALLUSER_REQUEST:
      return {
        loading: true,
        users: [],
      };
    case AUTH_GETALLUSER_SUCCESS:
      return {
        loading: false,
        users: action.payload.users === undefined ? [] : action.payload.users,
      };
    case AUTH_GETALLUSER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// GET ONE USER INFOMATION
export const userInfoReducer = (
  state = {
    userInfo: {},
  },
  action
) => {
  switch (action.type) {
    case AUTH_GETONEUSER_REQUEST:
      return {
        loading: true,
        userInfo: {},
      };
    case AUTH_GETONEUSER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case AUTH_GETONEUSER_FAIL:
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userEditReducer = (state = {}, action) => {
  switch (action.type) {
    // UPDATE USER INFOMATION REDUCER
    case AUTH_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case AUTH_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userChangeReducer = (
  state = {
    user: {},
  },
  action
) => {
  switch (action.type) {
    case AUTH_CHANGEPW_REQUEST:
      return {
        ...state,
        loading: true,
        isChanged: false,
      };
    case AUTH_CHANGEPW_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isChanged: true,
      };
    case AUTH_CHANGEPW_FAIL:
      return {
        ...state,
        isChanged: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
