import React from 'react'
import { bindActionCreators } from 'redux' // 
import { connect } from 'react-redux'
import Header from './compents/a.js'
import List from './compents/b.js'
import Serch from './compents/c.js'
import * as TodoActions from './actions'
// redux  准备 工作  先将组件写好 导入 
const App = ({todos, actions}) => ( //将 数据 action 绑定到 子 组件中
  <div>
    <Header addTodo={actions.addTodo}/>
    <Serch serch={actions.serch}/>
    <List list={todos} actions={actions}/>
  </div>
)

const mapStateToProps = state => ({ //将 state 绑定到 todos 上 并通过    下面的的connect 方法将 传递下去
  todos:state
})
// http://blog.csdn.net/liwusen/article/details/54138854 
// 我们可以通过Provider将store通过React的connext属性向下传递
// bindActionCreators的唯一用处就是需要传递action creater到子组件，并且改子组件并没有接收到父组件上传递的store和dispatch。
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch) // 第一个变量 是  引入的action 的第二个是dispatch 也就是驱动 action
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(App)
