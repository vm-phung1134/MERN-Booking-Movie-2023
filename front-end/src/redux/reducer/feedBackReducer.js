import { POST_FEEDBACK_FAIL, POST_FEEDBACK_REQUIRED, POST_FEEDBACK_SUCCESS } from "../constants/feedBackConstants"


export const feedBackReducer = 
    (
        state = {
            feedBack: {}
        } , 
        action
    ) => {
        switch(action.type){
        case POST_FEEDBACK_REQUIRED:
            return {
                loading: true,
                feedBack: {},
            }
        case POST_FEEDBACK_SUCCESS:
            return {
                loading: false,
                feedBack: action.payload,
            }
        case POST_FEEDBACK_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }



