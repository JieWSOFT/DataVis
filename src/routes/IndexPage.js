import React from 'react';
import { connect } from 'dva';
import { Link, Route, Redirect, Switch } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import SiderTrigger from '../components/layout/SiderTrigger'
const { SubMenu } = Menu;
import PropTypes from 'prop-types'
import { withRouter } from 'dva/router'
const { Header, Content, Sider } = Layout;
import styles from './IndexPage.css';

const IndexPage = ({ children, index, dispatch }) => {
  let { collapsed, headerTitle } = index;
  const toggle = () => { dispatch({ type: 'index/changeCollapsed' }) }
  return (
    <Layout className={styles.dataVis_layout}>
      <Header className={styles.dataVis_header}>
        <div type="primary" onClick={toggle} className={styles.dataVis_header_backBtton}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </div>
        <span className={styles.dataVis_header_title}>{headerTitle}</span>
        <div className={styles.dataVis_header_right_wrap}>
          <Icon type="laptop" className={styles.dataVis_header_icon} />
          <Icon type="fork" className={styles.dataVis_header_icon} />
          <Icon type="table" className={styles.dataVis_header_icon} />
          <Icon type="question-circle-o" className={styles.dataVis_header_icon} />
          <Icon type="sync" className={styles.dataVis_header_icon} style={{ marginRight: '10px' }} />
          <span className={styles.dataVis_header_userName}>欢迎&nbsp;&nbsp;<span>用户1234</span></span>
          <Icon type="logout" className={styles.dataVis_header_icon} />
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff', overflowX: 'hidden', overflowY: 'auto' }} collapsible
          collapsed={collapsed} onCollapse={toggle} trigger={<SiderTrigger collapsed={collapsed} />}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="ybp" ><Link to="/"><span><Icon type="layout" /><span>仪表盘</span></span></Link></Menu.Item>
            <Menu.Item key="search" ><Link to="/"><span><Icon type="layout" /><span>搜索</span></span></Link></Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="layout" /><span>数据集成</span></span>}>
              <Menu.Item key="1" ><Link to="/">数据集成方案</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/dataTemplete">规则模版管理</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="dataCalc" ><Link to="/"><span><Icon type="layout" /><span>数据计算</span></span></Link></Menu.Item>
            <Menu.Item key="dataManger" ><Link to="/"><span><Icon type="layout" /><span>数据管理</span></span></Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '10px 10px' }}>
          <Content style={{ margin: 0, minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
IndexPage.prototypes = {
  children: PropTypes.element.isRequired,
  index: PropTypes.object,
  dispatch: PropTypes.func
}

export default withRouter(connect(({ index }) => ({ index }))(IndexPage))

