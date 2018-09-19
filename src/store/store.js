import {createStore, combineReducers, applyMiddleware} from 'redux';
//redux-thunk中间件，用来处理异步操作
import thunk from 'redux-thunk';

import { reducerModel } from './reducerModel/reducer';

import { ajaxStore } from './IndexPage/reducer';


const reducer = combineReducers({ // combineReducers方法的作用： 用于合成多个reducer，返回一个大的reducer
    reducerModel: reducerModel,
    IndexPage: ajaxStore
})

const store = createStore( //createStore方法的作用： 用于创建存储数据的对象 （接收两个参数 reducer,  applyMiddleware中间件）
    reducer,
    applyMiddleware(thunk)
)

export default store; //将store导出，作为全局的数据源

