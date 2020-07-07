import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchPosts} from '../redux/actions'
import {Post} from './Post'

export const  FetchedPosts=()=>{
    const dispatch=useDispatch();
    const posts=useSelector((state)=>{
        return state.posts.fetchedPosts
    });
    const loading =useSelector(state=>state.app.loading)
    
    if (!posts.length){
        return  <button  
        className="btn btn-primary"
        onClick={()=>dispatch(fetchPosts())}
        >download</button>
    }
    if(loading===true){ 
        return (<span>loading ...</span>)
    }
    else {
        return(
        posts.map(post=><Post post={post} key={post.id}/>)
    )}
}

 