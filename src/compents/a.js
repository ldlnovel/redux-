import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      val: '',
      quantity: 0
      // addTodo:this.props.addTodo
    }
  }
  change (e) {
    this.setState({
      val: e.target.value
    })
  }
  add (e) {
    if(e.which === 13 && e.target.value !==''){
      this.props.addTodo(e.target.value);
      this.setState({
        val: ''
      })
    }
  }
  render() {
    let val = this.state.val;
    let change = this.change;
    let add = this.add.bind(this);
    return (
      <header className="header">
        <h1>todos</h1>
        <input 
        onChange = {change.bind(this)}
        onKeyUp = {add}
        value = {val}
        type="text"/>
      </header>
    )
  }
}
