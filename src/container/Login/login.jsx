import React, { Component, PropTypes } from 'react'
import { hashHistory } from 'react-router';
import * as auth from '../../util/authorized'
import * as $http from '../../util/fetchdata.js'
import './login.css'
import { Form, Input, Icon, Checkbox, Button, Layout, notification } from 'antd'
const FormItem = Form.Item
const { Header, Footer } = Layout;

const openNotification = ({ msg = "", type = "info", call = null }) => {
    const args = {
        message: '提示信息',
        description: msg,
        duration: 1,
        getContainer: () => document.getElementById("login-form-loginform"),
        onClose: () => {
            if (call != null) {
                call();
            }
        }
    };
    notification[type](args);
};

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //获取输入信息
                let { userName, password } = values;
                //测试代码
                //fetch("http://192.168.0.210/app/login_apkCheckVersion.action",{ method: "POST",})
                let parms = {
                    username: userName,
                    password: password,
                    "sysEquipment.uuid":"",
                    loginType: 1,
                };
                $http.postData("login_appLoginWithEqInfos.action", parms)
                    .then(function (response) {
                        console.log(response.data);
                        let { loginState = null, loginName=null ,loginUserId =null} = response.data;
                        if (loginState == 1) {
                            //登录成功
                            auth.authSetLoginToken(userName);
                            auth.authSetLoginUser({
                                "name": loginName,
                                "loginId": loginUserId
                            });
                            auth.authSetRole(auth.AUTHORIZED_ROLE_NORMAL);
                            openNotification({
                                msg: "登录成功",
                                type: "success",
                                call: () => {
                                    hashHistory.push("/rotapp/homepage");
                                }
                            })
                        } else {
                            openNotification({
                                msg: "用户或者密码不正确",
                                type: "error",
                                call: () => {
                                }
                            })
                        }
                    });
                //测试代码
                if (userName == "admin" && password == "password") {

                } else {

                }
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout className="loginLayout" style={{ height: '100%' }}>
                <Header className="login-header">
                    <div className="logoBaner">
                        <h1 className="logo" id="logo"><a href="#">React-Start</a></h1>
                        <h2 className="logo-title" style={{ marginTop: '5px', fontSize: '40px' }}>
                            React Start 示例项目
                    </h2>
                    </div>
                </Header>
                <Layout className="layout">
                    <div id="login-form-container">
                        <Form id="login-form-loginform" onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入帐号' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="帐号" />
                                    )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                                    )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                    )}
                                <a className="login-form-forgot">忘记密码?</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
          </Button>
                                <a>立即注册!</a>
                            </FormItem>
                        </Form>
                    </div>

                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    React-Ant-Demo ©2017 Created by Fossil.Lin
          </Footer>
            </Layout>



        );
    }
}

const Login = Form.create()(NormalLoginForm);
module.exports = Login;