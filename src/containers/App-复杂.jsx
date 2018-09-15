/*
容器组件: 通过connect产生
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {increment, decrement} from '../redux/actions'
import Counter from '../components/counter'

// 将state状态数据映射(转换)成一般属性传递给UI组件(Counter)
function mapStateToprops (state) { // state就是redux中store对象管理的state
  return { // 这个对象的所有属性都会传给UI组件
    count: state
  }
}

// 将包含dispatch语句的函数映射成函数属性传递给UI组件(Counter)
function mapDispatchToProps (dispatch) {
  return { // 这个对象中所有的方法都会传给UI组件
    increment: function (number) {// 函数中必须调用dispatch()
      dispatch(increment(number))
    },
    decrement: function (number) {// 函数中必须调用dispatch()
      dispatch(decrement(number))
    },
  }
}

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(Counter)

/*
mapStateToprops: 将state状态数据映射(转换)成一般属性传递给UI组件(Counter)
  count
mapDispatchToProps: 将包含dispatch语句的函数映射成函数属性传递给UI组件(Counter)
  increment
  decrement
 */