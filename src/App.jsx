/*
应用根组件
 */
import React, {Component} from 'react'
import Search from './components/search'
import Main from './components/main'

export default class App extends Component {

  state = {
    searchName: ''
  }

  setSearchName = (searchName) => {
    // 更新状态
    this.setState({
      searchName
    })
  }

  render () {
    const {searchName} = this.state
    return (
      <div className="container">
        <Search setSearchName={this.setSearchName}/>
        <Main searchName={searchName}/>
      </div>
    )
  }
}