import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Header extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="header">
                <div>Add Column</div>
                <div>Add Row</div>
                <div>History</div>
                <div>New Table</div>
            </div>
        )
    }

}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
       testState: state
    };
}

// function matchDispathToProps(dispatch){
//     return bindActionCreators({onAddItem1: onAddItem}, dispatch)
// }

export default connect(mapStateToProps)(Header); // this is now a contanier