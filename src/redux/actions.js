/*
包含n个action creator的模块
action creator是用来返回action对象的工厂函数
 */
import {INCREMENT, DECREMENT} from './action-types'

export const increment = (number) => ({type: INCREMENT, number})

export const decrement = (number) => ({type: DECREMENT, number})