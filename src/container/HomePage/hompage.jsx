import React, { Component, PropTypes } from 'react';
import {Carousel, Row, Col, Card,Table } from 'antd';
// import json from './json'
// import json1 from './json1'
// import json2 from './json2'
// import json3 from './json3'
// import json4 from './json4'
// import json5 from './json5'
// import json6 from './json6'
// import json7 from './json7'
import './homepage.css'
import * as $http from '../../util/fetchdata.js';
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
const data=[{
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
}]


class HomePage extends Component {
    componentDidMount() {
        console.log("In Homepage");
         $http.postData("dynamic_getLatestInfoNew.action", {})

    }
    
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


module.exports = HomePage;