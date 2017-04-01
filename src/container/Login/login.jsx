import React, { Component, PropTypes } from 'react'
import './login.css'
import { Form, Input, Icon, Checkbox, Button, Layout } from 'antd'
const FormItem = Form.Item
const { Header, Footer } = Layout;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout className="loginLayout" style={{ height: '100%' }}>
                <Header className="login-header">
                    <div className="logoBaner">
                        <h1 class="logo" id="logo"><a href="#">React-Start</a></h1>
                        <h2 class="logo-title" style={{marginTop:'5px',fontSize: '40px'}}>
                            React Start 示例项目
                    </h2>
                    </div>
                </Header>
                <Layout className="layout">
                    <div id="login-form-container">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入帐号' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="帐号" />
                                    )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入面膜!' }],
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

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm