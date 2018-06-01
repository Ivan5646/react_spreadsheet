import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Header extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <p>header component</p>
        )
    }

}

export default Header;