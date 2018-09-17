/*
容器组件: 通过connect产生
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {increment, decrement, incrementAsync} from '../redux/actions'
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

/*
export default connect(
  mapStateToprops,
  mapDispatchToProps  // 函数或对象
)(Counter)
*/

export default connect(
  state => ({count: state}),
  {increment, decrement, incrementAsync} // 内部会对对象中的方法再加一层包装
)(Counter)

/*
传给Counter组件的函数属性:
  increment: function (number){
    dispatch(increment(number))
  }
  decrement: function (number){
    dispatch(decrement(number))
  }
 */

/*
mapStateToprops: 将state状态数据映射(转换)成一般属性传递给UI组件(Counter)
  count
mapDispatchToProps: 将包含dispatch语句的函数映射成函数属性传递给UI组件(Counter)
  increment
  decrement
 */