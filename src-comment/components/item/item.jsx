/*
评论信息组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './item.css'

export default class Item extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  }

  deleteComment = () => {
    const {comment, deleteComment, index} = this.props
    if(window.confirm(`确定删除${comment.username}的评论吗?`)) {
      deleteComment(index)
    }
  }

  render () {
    const {username, content} = this.props.comment

    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.deleteComment}>删除</a>
        </div>
        <p className="user"><span >{username}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}

