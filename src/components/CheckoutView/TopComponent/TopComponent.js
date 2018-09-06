import React, {Component} from 'react';
import {connect} from 'react-redux';

class TopComponent extends Component {
    render(){
        return (
            <div>
                <span>{}</span>
            </div>
        ) //end of return
    } //end of render
} //end of TopComponent class

export default connect()(TopComponent);