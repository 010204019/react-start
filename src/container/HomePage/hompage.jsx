import React, { Component, PropTypes } from 'react';
import {Carousel, Row, Col, Card,Table } from 'antd';
import './homepage.css'

const columns = [{
    title: '姓名',
    dataIndex: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
}, {
    title: '地址',
    dataIndex: 'address',
}];
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];

class homePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Row>
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </Row>
                </div>
                <div className="code-box-demo" style={{ background: '#ECECEC' }}>
                    <Row>
                        <Col span="8">
                            <Card className="cardTable" title="卡片中带表格" bordered={false}>
                                <Table columns={columns} dataSource={data} size="middle" />

                            </Card>
                        </Col>
                        <Col span="8">
                            <Card title="Card title" bordered={false}>Card content</Card>
                        </Col>
                        <Col span="8">
                            <Card title="Card title" bordered={false}>Card content</Card>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}


export default homePage;