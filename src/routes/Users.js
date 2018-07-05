
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
//引入connect 工具函数
import {connect} from 'dva';
//导入user的container component
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';
//导入对应的样式
import styles from './Users.less';


function Users({location,dispatch,users}) {
  const {
    loading,list,total,current,currentItem,modalVisible,modalType
  }=users; //结构users里面的东西，即相当于const loading=users.loading；const list=users.list;
  const userListProps = { dataSource: list,
    total,
    loading,
    current, };
  const userSearchProps = {};
  const userModalProps = {};
  return (
    <div className={styles.normal}>
      {/*{用户筛选搜索框}*/}
      <UserSearch {...userSearchProps}/>
      {/*{用户信息展示列表}*/}
      <UserList {...userListProps}/>
      {/*{添加用户&修改用户弹出的浮层}*/}
      <UserModal {...userModalProps}/>
    </div>
  )
}

Users.propTypes ={
  users:PropTypes.object,
};//类型判断
function mapStateToProps({users}) {
  return {users};  //将model users 里面的state返回
}
export default connect(mapStateToProps)(Users);
