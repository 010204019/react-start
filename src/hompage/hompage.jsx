import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
import '../App.css';
import About from './about';
import Work from './test1';
import { Router, Route, hashHistory } from 'react-router';
class homePage extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
    render() {
        return (
            <Layout id="components-layout-demo-side">
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span className="nav-text">作业</span></span>}
                        >
                            <Menu.Item key="1">普通作业</Menu.Item>
                            <Menu.Item key="2">周期作业</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span className="nav-text">发现</span></span>}
                        >
                            <Menu.Item key="4">英语趣配音</Menu.Item>
                            <Menu.Item key="5">体育锻炼卡</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6">
                            <span>
                                <Icon type="file" />
                                <span className="nav-text">File</span>
                            </span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Bill is a cat.
            </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
          </Footer>
                </Layout>
            </Layout>
        );
    }
}

homePage.propTypes = {

};

export default homePage;