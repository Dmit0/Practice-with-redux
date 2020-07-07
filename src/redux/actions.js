import {POST,APP} from './types'


export function createPost(post){
    return {
        type:POST.CREATE_POST,
        payload:post
    }
}

export function fetchPosts(){
    return async dispatch =>{
        dispatch(show_loader())
        const response = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=6')
        const json = await response.json()
        dispatch({type:POST.FETCHED_POSTS,payload:json})
        dispatch(hide_loader())

    }
}

export const show_loader=()=>{
    return{
        type:APP.SHOW_LOADER,
    }
}

export const hide_loader=()=>{
    return{
        type:APP.HIDE_LOADER,
    }
}