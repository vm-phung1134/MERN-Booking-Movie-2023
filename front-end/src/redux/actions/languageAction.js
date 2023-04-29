import { CHANGE_LANGUEGE } from "../constants/languageConstant"
// ACTION CHANGE LANGUAGES
export const changeLanguage = (value) => async (dispatch) => {
    return dispatch({
        type: CHANGE_LANGUEGE,
        payload: value || "English"
    })
}