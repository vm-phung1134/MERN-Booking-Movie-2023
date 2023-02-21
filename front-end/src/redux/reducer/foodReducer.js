import {
  ALL_FOOD_REQUEST,
  ALL_FOOD_SUCCESS,
  ALL_FOOD_FAIL,
  INCREMENT_FOOD,
  DECREMENT_FOOD
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
        foods: action.payload,
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
