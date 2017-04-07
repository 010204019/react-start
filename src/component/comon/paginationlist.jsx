import { Table } from 'antd';
import React, { Component, PropTypes } from 'react';
/**
 * 分页控件
 */
class PaginationList extends Component {

    render() {
        return (
            <Table columns={columns}
                rowSelection={rowSelection}
                rowKey={record => record.id}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />

        );
    }
}