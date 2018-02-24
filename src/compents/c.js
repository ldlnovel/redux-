import React, { Component } from 'react'

export default class Serch extends Component {
  constructor(props){
    super(props)
    this.state = {
      val: '',
    }
  }
  changeSerch (e) {
    let value = e.target.value;
    this.props.serch(value);
    this.setState({
      val: value
    })
  }

  render() {
    let val = this.state.val;
    let changeSerch = this.changeSerch;
    return (
        <input 
        onChange = {changeSerch.bind(this)}
        value = {val}
        type="text"/>
    )
  }
}
