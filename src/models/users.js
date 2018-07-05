import {hasHistory} from 'dva/router';
//处理异步操作
import {query} from "../services/users";

export default {
  namespace:'users',
  state:{
    list:[],
    total:null,
     loading:false,//控制加载状态
    current:null,//当前分页信息
    currentItem:{},//当前操作的用户对象
    modalVisible:false,//弹出框的显示状态
    modalType:'create',//弹出框的类型（增加用户，编辑用户）
  },

  subscriptions:{
    setup({dispatch,history}){
      history.listen(location => {
        if (location.pathname === '/users'){
          dispatch ({
            type: 'query',
            payload:{}
          })
        }
      })
    }
  },
  // effect控制数据流程，所以最终我们会在effects中调用reducers
  effects:{
    *query({payload},{select,call,put}){
      //其中call和put是dva提供的方便操作effects的函数，简单理解call是调用执行一个函数而put是dispatch执行一个action，而select则可以用来访问其他的model
      yield put({type:'showLoading'});

      const {data} = yield  call(query);
      if(data){
        yield put({
          type:'querySuccess',
          payload:{
            list:data.data,
            total:data.page.total,
            current:data.page.current
          }
        })
      }
    },
    *create(){},
    *'delete'(){},
    *update(){}
  },

  //如何根据新的数据来修改本身的state就是reducers要做的事情
  reducers:{
    showLoading(state,action){
      return { ...state, loading:true}
    },//控制加载状态的reducer
    showModal(){},
    hideModal(){},
    querySuccess(state,action){
      return {...state, ...action.payload,loading:false}
    },
    createSuccess(){},
    deleteSuccess(){},
    updateSuccess(){}
  }

}
