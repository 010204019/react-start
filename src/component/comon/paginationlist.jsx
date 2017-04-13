import { Table } from 'antd';
import React, { Component, PropTypes } from 'react';
import * as $http from '../../util/fetchdata'
/**
 * 分页控件
 */

const defaultConfig = {
    columns: [],//这个是列设置
    url: "",//请求的地址
    parmsPagination: {
        "pageInfo.pageNo": 1,
        "pageInfo.page": 1,
        "pageInfo.pageSize": 10
    },//请求分页列表的分页参数
    parmsQuery: {},//请求分页列表时的业务参数对象
    data: [],//存放data数据使用的地方
    loading: false,//页面是否加载中的判断
    rowSelection: {},//列表行选中时的判断
    rowkey: "id",
    pagination: {
        defaultPageSize: 10,
        pageSize: 10
    },
}
class PaginationList extends Component {
    //构造方法设置
    constructor(props, context) {
        super(props, context);
        console.log("prop----------prop---------");
        console.log(props)
        //初始化state
        this.state = Object.assign({},defaultConfig, props.config)
    }
    //提供外部的控制-删除指定index下的元素
    deleteRowByIndex= (index) =>{
         const data = [...this.state.data];
         data.splice(index, 1);
         this.setState({ data });
    }
    //提供外部控制-设置
    reloadPageByConfig = (paginationConfig) => {
        this.setState({ ...Object.assign({}, defaultConfig, paginationConfig) }, function () {
            let pamObject = Object.assign({}, this.state.parmsPagination, this.state.parmsQuery);
            this.fetchUrl(pamObject);
        });
    }

    //处理分页组件跳转或过滤器变化时的函数
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        //更新分页列表的分页请求参数
        let tempParmsPagination = {
            "pageInfo.pageNo": pagination.current,
            "pageInfo.page": pagination.current,
            "pageInfo.rows": pagination.pageSize,
            "pageInfo.pageSize": pagination.pageSize,
        }
        //设置会内部状态中
        this.setState({
             pagination: pager,
             parmsPagination: Object.assign({},this.state.parmsPagination, tempParmsPagination)
        },function(){
            this.fetchUrl(Object.assign({},this.state.parmsPagination, this.state.parmsQuery));
        })
        
    }

    //设置请求页面数据函数
    fetchUrl = (params = {
        "pageInfo.pageNo": 1,
        "pageInfo.page": 1,
        "pageInfo.pageSize": 10,
    }) => {
        let _this = this;
        this.setState({ loading: true });
        $http.getData(this.state.url, {
            ...params
        }).then(function (response) {
            const pagination = { ..._this.state.pagination };
            pagination.total = response.data.obj.total;
            _this.setState({
                loading: false,
                data: response.data.obj.row,
                pagination,
            });
        })
    }
    //组件加载完毕后
    componentDidMount() {
        let pamObject = Object.assign({},this.state.parmsPagination, this.state.parmsQuery);
        console.log("------------Paginat--------------")
        console.log(this.state);
        this.fetchUrl(pamObject);
    }
    render() {
        return (
            <div>
                <Table columns={this.state.columns}
                    rowSelection={this.state.rowSelection}
                    rowKey={(record) => { return record[this.state.rowkey] }}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </div>

        );
    }
}


//设置默认值
PaginationList.defaultProps = {
    // config: {
    //     //分页
    //     pagination: {
    //         defaultPageSize: 10,
    //         pageSize: 10
    //     }
    // }
}

PaginationList.propTypes = {
    // config:

};


module.exports = PaginationList; 