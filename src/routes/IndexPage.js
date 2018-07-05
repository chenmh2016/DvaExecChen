// import React from 'react';
// import { connect } from 'dva';
// import styles from './IndexPage.css';
//
// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }
//
// IndexPage.propTypes = {
// };
//
// export default connect()(IndexPage);
import React from 'react';
import {connect} from 'dva';
import {Route, Redirect,Switch,Link} from 'dva/router';
import {Layout,Row,Col,Menu,Icon} from 'antd';
import Users from './Users';
import UserAdep from  './UserAdep';
import styles from './IndexPage.css';

const {Content,Sider} = Layout;

function TopBar() {
  return (
    <header>
      <Col span={24}>
        <h1> 我的dva -demo</h1>
      </Col>
    </header>
  )
}
function SideBar(props) {
  const close = () => {
    props.close();
  };
  const open = () => {
    props.open();
  };

  // collapse 折叠
  //  onCollapse={(c)=>{if(c) {open();}else{close()}}} 等价于 onCollapse={(collapsed)=>{if(collapsed) {open();}else{close()}}}
  return (
    <Sider collapsible={true} width={200}
           onCollapse={(c)=>{if(c) {open();}else{close()}}}
           style={{ background: '#fff' }}>
      <Menu mode='inline'
            theme='dark'
            defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
            style={{height:"100%" ,borderRight:0,backgroundColor:"#333744"}}
      >
        <Menu.Item key="1">
          <Icon type="user">
            <span><Link to='/users'>users</Link></span>
          </Icon>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user">
            <span><Link to='/we'>we</Link></span>
          </Icon>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}


class IndexPage extends React.Component{
  constructor(){
    super();
    this.state={
      ml:"200px"
    }
  }
  close = ()=>{
    this.setState({ml:"200px"})
  };
  open = ()=>{
    this.setState({ml:"80px"})
  }
  render(){
    return (
      <Layout>
        <TopBar/>
        <Layout>
          <SideBar close={this.close.bind(this)} open={this.open.bind(this)}/>
          <Layout style={{ marginLeft:this.state.ml}}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 880 }}>
              <Switch>
                <Route path='/users' component={Users} />
                <Redirect from='/*' to='/users'/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
export default connect()(IndexPage);
