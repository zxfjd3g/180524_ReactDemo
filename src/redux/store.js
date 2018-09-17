/*
redux核心管理对象store对象模块
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' // 引入异步中间件
import { composeWithDevTools } from 'redux-devtools-extension'

import {count} from './reducers'

// 创建store, 指定reducer并应用上异步中间件
export default createStore(count, composeWithDevTools(applyMiddleware(thunk))) // 内部会第一次调用count得到初始状态


const arr = [1, 2, 3, 5, 7, 8]
// 求出所有偶数的和
let sum = 0
arr.forEach(item => {
  if(item%2===0) {
    sum += item
  }
})

sum = arr.reduce((preTotal, item) => preTotal + (item%2===0 ? item : 0), 0)
