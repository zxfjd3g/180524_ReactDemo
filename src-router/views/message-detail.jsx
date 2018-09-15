import React, {Component} from 'react'
export default class MessageDetail extends Component {

  messageDetails =  [
    {id: 1, title: 'Message01', content: 'Message content001'},
    {id: 3, title: 'Message03', content: 'Message content003'},
    {id: 5, title: 'Message05', content: 'Message content005'},
  ]

  render () {
    // 得到请求参数中的id
    const {id} = this.props.match.params
    // 得到对应的detail
    const detail = this.messageDetails.find(md => md.id === id*1)

    return (
      <ul>
        <li> ID: {id}</li>
        <li>TITLE: {detail.title}</li>
        <li>CONTENT: {detail.content}</li>
      </ul>
    )
  }
}