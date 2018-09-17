/*
包含n个action creator的模块
action creator是用来返回action对象的工厂函数
 */
import {INCREMENT, DECREMENT} from './action-types'

// 同步增加的action
export const increment = (number) => ({type: INCREMENT, number})
// 同步减少的action
export const decrement = (number) => ({type: DECREMENT, number})


// 异步增加的action
export const incrementAsync = (number) => {
  // 返回函数, 函数必须有dispatch参数
  return dispatch => {
    // 1. 执行异步代码
    setTimeout(() => {
      // 2. 完成之后, 分发一个同步action
      dispatch(increment(number))
    }, 1000)

  }
}


/*
export const increment = (number) => {
  setTime(() => {
    return ({type: INCREMENT, number})
  }, 1000)
}*/
