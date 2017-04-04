import React, { Component, PropTypes } from 'react';
import '../resource/css/allshare.css'
class RootApp extends  React.Component {
    state = {
        isLogined: false,
        mode: 'inline',
    };
    render() {
        return (
            <div style={{height:'100%'}}>
                {this.props.children}
            </div>

        );
    }
}


module.exports =  RootApp;