import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    hashHistory
} from 'react-router';

import * as routerUrl from '../routes/routeconst';
import '../resource/css/allshare.css'
class RootApp extends React.Component {
    state = {
        isLogined: false,
        mode: 'inline',
    };
    componentWillMount() {
        let { pathname } = this.props.location;
        if (pathname == "/") {
            hashHistory.push(routerUrl.URL_HOME_PAGE);
        }
    }
    //组件加载完毕后
    componentDidMount() {
        if (this.props.pageLoad.loadQueue.length > 0) {
            document.getElementById('loading').style.display = "block";
        } else {
            document.getElementById('loading').style.display = "none";
        }
    }
    //通过监听事件变化
    componentWillUpdate() {
        if (this.props.pageLoad.loadQueue.length > 0) {
            document.getElementById('loading').style.display = "block";
        } else {
            document.getElementById('loading').style.display = "none";
        }
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                {this.props.children}
            </div>

        );
    }
}


module.exports = connect(state => state)(RootApp);