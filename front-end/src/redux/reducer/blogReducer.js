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
} 
from '../constants/blogConstants'

//REDUCER GET ALL CINEMAS
export const blogReducer = 
    (
        state = {
            blogs: []
        } , 
        action
    ) => {
        switch(action.type){
        case GET_ALL_BLOG_REQUIRED:
            return {
                loading: true,
                blogs: []
            }
        case GET_ALL_BLOG_SUCCESS:
            return {
                loading: false,
                blogs: action.payload.blogs === undefined ? [] : action.payload.blogs,
            }
        case GET_ALL_BLOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }

    export const blogDetailReducer = 
    (
        state = {
            blog: {}
        } , 
        action
    ) => {
        switch(action.type){
        case GET_ONE_BLOG_REQUIRED:
            return {
                loading: true,
                blog: {}
            }
        case GET_ONE_BLOG_SUCCESS:
            return {
                loading: false,
                blog: action.payload === undefined ? {} : action.payload,
            }
        case GET_ONE_BLOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }

    export const blogEditReducer = (state = {}, action) => {
        switch (action.type) {
          // UPDATE USER INFOMATION REDUCER
          case UPDATE_ONE_BLOG_REQUIRED:
            return {
              ...state,
              loading: true,
            };
          case UPDATE_ONE_BLOG_SUCCESS:
            return {
              ...state,
              loading: false,
              isUpdated: action.payload,
            };
          case UPDATE_ONE_BLOG_FAIL:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
          default:
            return state;
        }
      };