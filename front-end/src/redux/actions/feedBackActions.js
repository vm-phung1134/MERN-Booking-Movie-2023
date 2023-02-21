import axios from 'axios'
import { POST_FEEDBACK_FAIL, POST_FEEDBACK_REQUIRED, POST_FEEDBACK_SUCCESS } from '../constants/feedBackConstants'


const baseURL = "http://localhost:5000"

// export const getAllFeedBack = () => async (dispatch) => {
//     try{
//         dispatch({type: })
//         const {data} = await axios.get(`http://localhost:5000/api/v1/feedbacks`)
//         dispatch({
//             type: ,
//             payload: data
//         })
//     }catch(error){
//         dispatch({
//             type: ,
//             payload: error
//         })
//     }
// }

export const postOneFeedBack = (feedBack) => async (dispatch) => {
    try{
        
        dispatch({type: POST_FEEDBACK_REQUIRED})
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const {data} = await axios.post(
            `${baseURL}/api/v1/feedbacks/`,
            feedBack,
            config
            )
        dispatch({
            type: POST_FEEDBACK_SUCCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: POST_FEEDBACK_FAIL,
            payload: error
        })
    }
}
