/*
包含n个reducer函数的模块
reducer函数: 根据老的state的指定的action产生新的state的回调函数
 */

import {INCREMENT, DECREMENT} from './action-types'

// 用来管理count状态的reducer
export function count (state=0, action) {
  console.log('count()', state, action)
  switch (action.type) {
    case INCREMENT:  // 增加
      return state + action.number
    case DECREMENT:  // 减少
      return state - action.number
    default:
      return state
  }
}