/*
应用根组件
 */
import React, {Component} from 'react'

import {Button, Toast} from 'antd-mobile'


export default class App extends Component {

  handleClick = () => {
    Toast.success('点击了...')
  }

  render () {
    return (
      <Button type='primary' onClick={this.handleClick}>测试antd mobile</Button>
    )
  }
}