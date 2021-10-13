import { createStore, combineReducers,applyMiddleware } from 'redux';

import  userReducer  from './reducers/userReducer'
import  postReducer from './reducers/postReducer'
import  viewReducer from './reducers/viewReducer'


//import {UpperToUserName } from './middlewares/crud'
//import {reducer as formReducer} from 'redux-form'

// const reducer = combineReducers({ userReducer,postReducer,viewReducer,form:formReducer})
const reducer = combineReducers({ userReducer,postReducer,viewReducer})

const store = createStore(reducer,applyMiddleware());
// const store = createStore(reducer);


window.store = store

export default store;
