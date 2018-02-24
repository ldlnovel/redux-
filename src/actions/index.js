
  let REQUEST_POST = "REQUEST_POST"

  let addTodo = (text) => {
    return {
      type: REQUEST_POST,
      text
    }
  }

  exports.addTodo = addTodo
  exports.REQUEST_POST = REQUEST_POST

  let DELE_POST = "DELE_POST"
  let deleS = (index) =>{
    return {
      type: DELE_POST,
      index
    }
  }

  // 异步 demo  删除 延迟 2秒
  // export function dele(index){
  //   return function (dispatch) {
  //     setInterval(function(index){
  //       dispatch(deleS(index))
  //     }, 2000)
  //   }
  // }

  let dele = (index) => {
    return function (dispatch) {
      setTimeout(function(){
        console.log(index)
        dispatch(deleS(index)) // 当使用feach 获取到数据之后  可以在这里面调用 action  type就是feach成功返回的data值；
      }, 2000)
    }
  }

  exports.dele = dele
  exports.DELE_POST = DELE_POST


  let SERCH_POST = "SERCH_POST"
  let serch = (text) =>{
    return {
      type: SERCH_POST,
      text
    }
  }
  exports.serch = serch
  exports.SERCH_POST = SERCH_POST
