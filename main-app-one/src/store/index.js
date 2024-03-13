import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from 'redux-thunk';
import {authReducer} from './redusers/auth/index.js';
import {EventReducer} from './redusers/event/index.js';

export const rootReducer = combineReducers({
    isAuth: authReducer,
    isEvent: EventReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))