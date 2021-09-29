import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import classifyReducer from './module/classifyReducer'
import loginReducer from './module/loginReducer'

const reducer = combineReducers({
    classifyReducer, loginReducer
})

/* 抛出仓库，给其扩展日志和异步的能力 */
export default createStore(reducer, applyMiddleware(logger, thunk))