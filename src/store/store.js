import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {userSigninReducer } from './reducers/userReducers';
import {studentListOneReducer, studentListTwoReducer, studentDetailsReducer} from './reducers/studentReducers';

const initialState={
  userSignin:{
    userInfo: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : null
  }
};

const reducer = combineReducers({
  
  userSignin: userSigninReducer,

  studentDetails: studentDetailsReducer,
  studentListOne: studentListOneReducer,
  studentListTwo: studentListTwoReducer,
})

const store=createStore(reducer,initialState, composeWithDevTools(applyMiddleware(thunk)));
export default store;
