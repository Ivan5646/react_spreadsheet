import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';  
import Row from './Row';  

class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
          data: {},
        }
    }

    handleChangedCell = ({ x, y }, value) => { // what is the { x, y } ?
        const modifiedData = Object.assign({}, this.state.data) // copying the values of this.state.data to const modifiedData
        if (!modifiedData[y]) modifiedData[y] = {} 
        modifiedData[y][x] = value
        this.setState({ data: modifiedData })
    }

    updateCells = () => {
        this.forceUpdate()
    }

    render() {
        const rows = []

        for (let y = 0; y < this.props.y + 1; y += 1) { 
        const rowData = this.state.data[y] || {}
        rows.push(
            <Row
                handleChangedCell={this.handleChangedCell}
                updateCells={this.updateCells}
                key={y}
                y={y}
                x={this.props.x + 1} 
                rowData={rowData}
            />,
        )
      }
        return (
            <div>
                {rows}
            </div>
        )
    }
}

Table.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
}


function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
       testState: state
    };
}

export default connect(mapStateToProps)(Table); // this is now a contanier

