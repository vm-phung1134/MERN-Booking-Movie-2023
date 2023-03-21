import axios from "axios"
import { 
    GET_ALL_BLOG_FAIL, 
    GET_ALL_BLOG_REQUIRED, 
    GET_ALL_BLOG_SUCCESS, 
    GET_ONE_BLOG_FAIL, 
    GET_ONE_BLOG_REQUIRED, 
    GET_ONE_BLOG_SUCCESS, 
    UPDATE_ONE_BLOG_FAIL, 
    UPDATE_ONE_BLOG_REQUIRED,
    UPDATE_ONE_BLOG_SUCCESS
} from "../constants/blogConstants"
const baseURL = 'https://mern-full-stack-booking-movie-api.vercel.app'
//const baseURL = 'http://localhost:5000'
export const getAllBlog = () => async (dispatch) => {
    try{
        dispatch({type: GET_ALL_BLOG_REQUIRED})
        const {data} = await axios.get(`${baseURL}/api/v1/blogs`)
        dispatch({
            type: GET_ALL_BLOG_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_ALL_BLOG_FAIL,
            payload: error
        })
    }
}
export const getOneBlog = (id) => async (dispatch) => {
    try{
        dispatch({type: GET_ONE_BLOG_REQUIRED})
        const {data} = await axios.get(`${baseURL}/api/v1/blogs/${id}`)
        dispatch({
            type: GET_ONE_BLOG_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_ONE_BLOG_FAIL,
            payload: error
        })
    }
}

export const updateOneBlog = (id, values) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ONE_BLOG_REQUIRED });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `${baseURL}/api/v1/blogs/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_ONE_BLOG_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_ONE_BLOG_FAIL,
        payload: error.response.data.message,
      });
    }
  };