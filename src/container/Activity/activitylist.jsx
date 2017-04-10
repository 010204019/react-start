import React, { Component, PropTypes } from 'react';
import * as $http from '../../util/fetchdata'
import { Table, Button, Select } from 'antd';
import PaginationList from '../../component/comon/paginationlist'
const { Option } = Select;





const columns = [{
    title: '标题',
    dataIndex: 'hwInfo.title',
    // sorter: true,
    // render: name => `${name.first} ${name.last}`,
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
//选择行选择函数
const rowSelection = {
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
};

const paginationConfig = {
    //分页列表设置---设置列内容
    columns: columns,
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
    }

};

class ActivityList extends Component {
    constructor(props, context) {
        console.log("ActivityList---constructor---start")
        super(props, context);
        console.log(props)
        console.log("ActivityList---constructor---end")

    }
    handleSelectChange = (value) =>{
        console.log(`selected ${value}`);
        console.log()
        this.refs.listpage_activity.messageText("okokok")
    }

    state = {
        data: [],
        pagination: {
            defaultPageSize: 10,
            pageSize: 10
        },
        loading: false,
        pageListConfig: paginationConfig
    };

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetchUrl({
            "pageInfo.pageNo": pagination.current,
            "pageInfo.page": pagination.current,
            "pageInfo.rows": pagination.pageSize,
            "pageInfo.pageSize": pagination.pageSize,
            "hwInfo.releState": 1,
        });
    }
    fetchUrl = (params = {
        "pageInfo.pageNo": 1,
        "pageInfo.page": 1,
        "pageInfo.pageSize": 10,
        "hwInfo.releState": 1,

    }) => {
        let _this = this;
        this.setState({ loading: true });
        $http.getData('pchw_searchMyReleHwList.action', {
            ...params
        }).then(function (response) {
            const pagination = { ..._this.pagination };
            pagination.total = response.data.obj.total;
            _this.setState({
                loading: false,
                data: response.data.obj.row,
                pagination,
            });
        })
    }
    componentDidMount() {
        console.log("activyin....")
        console.log(this.state);
        console.log(this.state);
        console.log("activyin....")
        this.fetchUrl();
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
                    <PaginationList ref="listpage_activity" config={this.state.pageListConfig}></PaginationList>
                    {/*<Table columns={columns}
                rowSelection={rowSelection}
                rowKey={record => record.id}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />*/}
                </div>

            </div>

        );
    }
}


module.exports = ActivityList;