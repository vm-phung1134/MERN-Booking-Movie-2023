import {
  ALL_FOOD_REQUEST,
  ALL_FOOD_SUCCESS,
  ALL_FOOD_FAIL,
  INCREMENT_FOOD,
  DECREMENT_FOOD,
  ONE_FOOD_REQUEST,
  ONE_FOOD_SUCCESS,
  ONE_FOOD_FAIL,
  CREATE_FOOD_REQUEST,
  CREATE_FOOD_SUCCESS,
  CREATE_FOOD_FAIL,
  UPDATE_FOOD_REQUEST,
  UPDATE_FOOD_SUCCESS,
  UPDATE_FOOD_FAIL
} from "../constants/foodConstants";

//REDUCER GET ALL FOODS
export const foodReducer = (
  state = {
    foods: [],
  },
  action
) => {
  switch (action.type) {
    case ALL_FOOD_REQUEST:
      return {
        loading: true,
        foods: [],
      };
    case ALL_FOOD_SUCCESS:
      return {
        loading: false,
        foods: action.payload === undefined ? [] : action.payload,
      };
    case ALL_FOOD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case INCREMENT_FOOD:
      let increaseSL = state.foods.map((value) => {
        if (value._id === action.payload) {
          return {
            ...value,
            quantity: value.quantity < 20 ? value.quantity + 1 : value.quantity,
          };
        }
        return value;
      });
      return { ...state, foods: increaseSL };
    case DECREMENT_FOOD:
      let decreaseSL = state.foods.map((value) => {
        if (value._id === action.payload) {
          return {
            ...value,
            quantity: value.quantity > 0 ? value.quantity - 1 : value.quantity,
          };
        }
        return value;
      });
      return { ...state, foods: decreaseSL };
    default:
      return state;
  }
};

export const foodDetailReducer = (
  state = {
    food: {},
  },
  action
) => {
  switch (action.type) {
    case ONE_FOOD_REQUEST:
      return {
        loading: true,
        food: {},
      };
    case ONE_FOOD_SUCCESS:
      return {
        loading: false,
        food: action.payload,
      };
    case ONE_FOOD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CREATE_FOOD_REQUEST:
      return {
        loading: true,
        isCreated: false,
      };
    case CREATE_FOOD_SUCCESS:
      return {
        loading: false,
        food: action.payload,
        isCreated: true,
      };
    case CREATE_FOOD_FAIL:
      return {
        loading: false,
        isCreated: false,
      };
    default:
      return state;
  }
};

export const foodEditReducer = (
  state = {}, 
  action
  ) => {
  switch (action.type) {
    // UPDATE FOOD INFOMATION REDUCER
    case UPDATE_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
        isUpdated: false
      };
    case UPDATE_FOOD_SUCCESS:
      return {
        loading: false,
        isUpdated: true,
      };
    case UPDATE_FOOD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
