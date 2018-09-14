/*
评价列表组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Item from '../item/item'
import './list.css'

export default class List extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
  }

  render () {
    const {comments, deleteComment} = this.props
    // 动态确定是否需要显示
    const display = comments.length>0 ? 'none' : 'block'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <Item key={index} comment={comment} deleteComment={deleteComment} index={index}/>)
          }
        </ul>
      </div>
    )
  }
}