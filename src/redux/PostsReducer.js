import {POST} from './types'
const initialState={
    posts:[],
    fetchedPosts:[]
}

export const PostsReducer= (state=initialState,action)=>{
    switch (action.type){
        case POST.CREATE_POST: 
            return {...state,posts:[...state.posts,action.payload]}
        case POST.FETCHED_POSTS:
            return {...state,fetchedPosts:action.payload}
        
        default: return state
    }
   
}