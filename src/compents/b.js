import React, { Component } from 'react'
export default class Header extends Component {
  constructor (props) {
    super(props)
  }

  del(i) {
    console.log(i)
    this.props.actions.dele(i)
    // this.setState()
  }
  render() {
    let { list } = this.props;
    // console.log('页面')
    let lists = list.data
    return (
      <ul>
        {
          Object.keys(lists).map((el,i) => {
            // console.log(Object.keys(data))
            return (
              <li key={i} >
               {lists[i]} 
               {/*  onClick={del(i)}  绑定 不了 i  只会让 事件 自动执行   */}
               <button onClick={() => this.del(i)} >点击延迟两秒删除</button>
              </li>        
            )
          })
        }
      </ul>
    )
  }
}
