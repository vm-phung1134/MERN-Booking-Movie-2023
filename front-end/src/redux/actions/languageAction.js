import { CHANGE_LANGUEGE } from "../constants/languageConstant"

export const changeLanguage = (value) => async (dispatch) => {
    return dispatch({
        type: CHANGE_LANGUEGE,
        payload: value || "English"
    })
}