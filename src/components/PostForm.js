import React,{useState} from 'react'
import {connect} from 'react-redux'
import {createPost} from '../redux/actions'


const  Postform=(props)=>{
   const [form,setForm]=useState({
        title:'',
    })
    const submitHandler=(e)=>{
        e.preventDefault();
        const {title}=form;
        if(!title.trim()){
            return
        }
        const newPost={
            title,id:Date.now().toString()
        }
       
        props.createPost(newPost)
        setForm({title:''})
    }
    const onInput=(e)=>{
        setForm({...form,title:e.target.value});
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="form-group mt-3">
            <label htmlFor="Input" >New Post</label>
            <input type="text" value={form.title} className="form-control" id="Input" aria-describedby="emailHelp" onChange={onInput}/>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

const mapDispatchToProps ={
    createPost
}

export default connect(null,mapDispatchToProps)(Postform)