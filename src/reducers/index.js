import {REQUEST_POST, DELE_POST, SERCH_POST} from '../actions/index' //引入 action 中 动作的值
const data =[];
const reducers =(state = {data :data,flage:false}, actions) => {
  switch (actions.type) {
    case REQUEST_POST:  // actions  动作 触发的 type 值
      let data1 = state.data;
      data1.push(actions.text)
      return Object.assign({}, state, {data:data1})  // 深层次复制 数组  为的是不 影响 原来的 
    case DELE_POST:
      let data2= state.data;
      data2.splice(actions.index, 1)
      return Object.assign({}, state, {data :data2})   
    case SERCH_POST:
      let dataArr = []
      let data4 = state.data;
      data4.forEach(el => {
        if (el.match(actions.text)) { //match  筛选  可以正则匹配
          dataArr.push(el)
        }
      })
      return Object.assign({}, state, {data :dataArr})   
    default:
      return state
  }
 }

 export default reducers;
