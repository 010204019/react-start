import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, browserHistory,hashHistory } from 'react-router';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
import './app.css';
class App extends Component {
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
    /**
     * 点击菜单处理事件,通过触发时间派发浏览器路由
     */
    handleMenuClick = (e) => {
        console.log(e);
        switch (e.key) {
            case "1":
                hashHistory.push("/app/homepage");
                break;
            case "6":
                hashHistory.push("/app/about");
                break;

        }
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
                    <Menu
                        onClick={this.handleMenuClick}
                        theme="dark" mode={this.state.mode}
                        defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <span>
                                <Icon type="home" />
                                <span className="nav-text">首页</span>
                            </span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span className="nav-text">作业</span></span>}
                        >
                            <Menu.Item key="2">普通作业</Menu.Item>
                            <Menu.Item key="3">周期作业</Menu.Item>
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
                                <Icon type="info-circle" />
                                <span className="nav-text">关于</span>
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
                        {/*这里是放置页面内容*/}
                        <div style={{ background: '#fff', minHeight: '100%' }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Ant-Demo ©2017 Created by Fossil.Lin
          </Footer>
                </Layout>
            </Layout>
        );
    }
}

App.propTypes = {

};

export default App;