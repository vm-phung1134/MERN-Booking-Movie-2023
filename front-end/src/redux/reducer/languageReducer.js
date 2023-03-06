import { CHANGE_LANGUEGE } from "../constants/languageConstant";

export const changeLanguageReducer = (
    state = {
      language: {},
    },
    action
  ) => {
    switch (action.type) {
      case CHANGE_LANGUEGE:
        return {
          loading: true,
          language: action.payload,
        };
      default:
        return state;
    }
  };