import React, { Component, PropTypes } from 'react';
import { Button, Select, Popconfirm } from 'antd';
import PaginationList from '../../component/comon/paginationlist'
const { Option } = Select;
class HomeWorkList extends Component {
    columns = [{
        title: '标题',
        dataIndex: 'hwInfo.title',
        width: '40%',
    }, {
        title: '班级',
        dataIndex: 'classInfo.className',
        width: '20%',
    }, {
        title: '科目',
        dataIndex: 'hwInfo.teachingSubjects.name',
        width: '20%',
    },
    {
        title: '发布人',
        dataIndex: 'hwInfo.teacherInfo.name',
        width: '20%',
    }];
    columnsUnPublish = [{
        title: '标题',
        dataIndex: 'title',
        width: '40%',
    }, {
        title: '科目',
        dataIndex: 'teachingSubjects.name',
        width: '20%',

    },
    {
        title: '创建人',
        dataIndex: 'teacherInfo.name',
        width: '20%',

    }, {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record, index) => {
            return (
                <Popconfirm title="确认删除吗?" onConfirm={() => this.confirmDelete(index)}>
                    <Button type="danger">删除</Button>
                </Popconfirm>

            );
        },
    }];

    paginationConfig = {
        //分页列表设置---设置列内容
        columns: this.columns,
        url: 'pchw_searchMyReleHwList.action',//设置列表页面url
        //分页配置----行选择
        rowSelection: {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',    // Column configuration not to be checked
            }),
        },
        parmsQuery: {
            "hwInfo.releState": 1,
        },
        rowkey: "id",//指定列表每行数据的key指，一般指定为行的id

    };

    confirmDelete = (index) => {
        this.refs.listpage_activity.deleteRowByIndex(index);
    }
    //处理页面列表页面选择参数变化
    handleSelectChange = (value) => {
        console.log(`selected ${value}`);
        var tempaginationConfig = this.paginationConfig;
        if (value == "unpublish") {
            tempaginationConfig.parmsQuery["hwInfo.releState"] = 0;
            tempaginationConfig.columns = this.columnsUnPublish;
            tempaginationConfig.url = "pchw_searchMyUnReleHwList.action";
        } else {
            tempaginationConfig.parmsQuery["hwInfo.releState"] = 1;
            tempaginationConfig.columns = this.columns;
            tempaginationConfig.url = "pchw_searchMyReleHwList.action";
        }
        this.refs.listpage_activity.reloadPageByConfig(tempaginationConfig)
    }
    componentDidMount() {
        console.log("activyin....")
    }
    render() {
        return (
            <div style={{ padding: '15px' }}>
                <div style={{ marginTop: '15px' }}>
                    <Select size="large" defaultValue="publish" style={{ width: 120 }} onChange={this.handleSelectChange}>
                        <Option value="publish">已发布</Option>
                        <Option value="unpublish">未发布</Option>
                    </Select>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <PaginationList ref="listpage_activity" config={this.paginationConfig}></PaginationList>
                </div>

            </div>

        );
    }
}


module.exports = HomeWorkList;