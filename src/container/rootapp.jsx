import React, { Component, PropTypes } from 'react';
class RootApp extends Component {
    state = {
        isLogined: false,
        mode: 'inline',
    };
    
    componentWillMount() {
        console.log("RooaAp componentWillMount");
        console.log(this.props)
    }
    
    render() {
        return (
            <div style={{height:'100%'}}>
                {this.props.children}
            </div>

        );
    }
}


export default RootApp;