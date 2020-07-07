import {combineReducers} from 'redux'
import {PostsReducer} from './PostsReducer'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
    posts:PostsReducer,
    app:appReducer
})