import React, { Component } from 'react'
import { connect } from 'react-redux';

import { ajaxStore } from '../../store/IndexPage/action';

class IndexPage extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <h1>{this.props.data.age}</h1>
            </div>
        )
    }
    componentWillMount() {
        this.props.ajaxStore();
    }
}

export default connect(
    state => {
        return {
            data: state.IndexPage.userInfo
        }
    },
    {
        ajaxStore
    }
)(IndexPage);
