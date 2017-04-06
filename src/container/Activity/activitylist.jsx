import React, { Component, PropTypes } from 'react';
import * as $http from '../../util/fetchdata'
import { Table, Button, Select  } from 'antd';
const {Option} = Select;


function handleSelectChange(value) {
  console.log(`selected ${value}`);
}


const columns = [{
    title: '姓名',
    dataIndex: 'name',
    // sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: '性别',
    dataIndex: 'gender',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: '邮箱地址',
    dataIndex: 'email',
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

class ActivityList extends Component {
    state = {
        data: [],
        pagination: {defaultPageSize:50},
        loading: false,
    };

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetchUrl({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }
    fetchUrl = (params = {}) => {
        let _this = this;
        this.setState({ loading: true });
        $http.getData('https://randomuser.me/api', {
            results: 50,
            ...params,
        }).then(function (response) {
            const pagination = { ..._this.pagination };
            pagination.total = 200;
            _this.setState({
                loading: false,
                data: response.data.results,
                pagination,
            });
        })
    }
    componentDidMount() {
        this.fetchUrl();
    }
    render() {
        return (
            <div style={{padding:'15px'}}>
                <div style={{marginTop:'15px'}}>
                <Select  size="large"  defaultValue="publish" style={{ width: 120 }} onChange={handleSelectChange}>
                    <Option value="publish">已发布</Option>
                    <Option value="unpublish">未发布</Option>
                </Select>
                </div>
                <div style={{marginTop:'15px'}}>
                      <Table columns={columns}
                rowSelection={rowSelection}
                rowKey={record => record.registered}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />
            </div>
            
            </div>
      
        );
    }
}


module.exports = ActivityList;