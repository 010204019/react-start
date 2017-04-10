import { Table } from 'antd';
import React, { Component, PropTypes } from 'react';
import * as $http from '../../util/fetchdata'
/**
 * 分页控件
 */
class PaginationList extends Component {
    //构造方法设置
    constructor(props, context) {
        console.log("PaginationList---constructor---start222")
        super(props, context);
        //对listconfig 进行默认设置
        // let defualitConfig = {
        //     url: "",
        //     parms: {},
        //     loadding: false,
        //     rowSelection: {},
        //     pagination: {
        //         defaultPageSize: 10,
        //         pageSize: 10
        //     },
        //     handleTableChange: function () {
        //         console.log("change")
        //     }
        // }
        this.state = {
            url:"",//请求的地址
            parms:{},//请求分页列表时的参数对象
            data: [],//存放data数据使用的地方
            loading: false,//页面是否加载中的判断
            rowSelection: {},//列表行选中时的判断
            pagination: {
                    defaultPageSize: 10,
                    pageSize: 10
            },            
        }
        this.state = Object.assign(this.state, props.config)
        console.log(props)
        console.log("PaginationList---constructor---end")

    }
    //外部控制页面加载
    setParmsChangeLoad =(text)=>{
        console.log(text);
    }
    //设置请求页面数据函数
    fetchUrl = (params = {
        "pageInfo.pageNo": 1,
        "pageInfo.page": 1,
        "pageInfo.pageSize": 10,
        "hwInfo.releState": 1,

    }) => {
        let _this = this;
        this.setState({ loading: true });
        $http.getData(this.state.listconfig.url, {
            ...this.state.listconfig.parms
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


    render() {
        return (
            /*<Table columns={columns}
                rowSelection={rowSelection}
                rowKey={record => record.id}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />*/
            <div>
                {/*<Table columns={this.props.columns}
                rowSelection={this.props.rowSelection}
                rowKey={record => record.id}
                dataSource={this.state.data}
                pagination={this.props.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
                />*/}
                <div>123xxxx</div>
            </div>

        );
    }
}


//设置默认值
PaginationList.defaultProps = {
    config: {
        //分页
        pagination: {
            defaultPageSize: 10,
            pageSize: 10
        }
    }
}

PaginationList.propTypes = {
    // config:

};


module.exports = PaginationList; 