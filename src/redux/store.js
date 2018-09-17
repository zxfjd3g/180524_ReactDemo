/*
redux核心管理对象store对象模块
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' // 引入异步中间件

import {count} from './reducers'

// 创建store, 指定reducer并应用上异步中间件
export default createStore(count, applyMiddleware(thunk)) // 内部会第一次调用count得到初始状态