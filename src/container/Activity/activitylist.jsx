import React, { Component, PropTypes } from 'react';
import * as $http from '../../util/fetchdata'
import { Table, Button, Select  } from 'antd';
const {Option} = Select;


function handleSelectChange(value) {
  console.log(`selected ${value}`);
}


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

class ActivityList extends Component {
    state = {
        data: [],
        pagination: {
            defaultPageSize:10,
            pageSize:10},
        loading: false,
    };

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        alert(pagination.current)
        this.fetchUrl({
            "pageInfo.pageNo":pagination.current,
            "pageInfo.page":pagination.current,
            "pageInfo.rows":pagination.pageSize,
            "pageInfo.pageSize":pagination.pageSize,
            "hwInfo.releState":1,
        });
    }
    fetchUrl = (params = {
        "pageInfo.pageNo":1,
        "pageInfo.page":1,
        "pageInfo.pageSize":10,
        "hwInfo.releState":1,

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
                rowKey={record => record.id}
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