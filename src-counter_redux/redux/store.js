/*
redux核心管理对象store对象模块
 */
import {createStore} from 'redux'

import {count} from './reducers'

export default createStore(count) // 内部会第一次调用count得到初始状态