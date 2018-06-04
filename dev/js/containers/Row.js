import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell'

class Row extends Component {
    constructor(props){
        super(props);

        this.state = {
            cells: [],
            y: props.y
        }
    }

    render(){ 
        for (let x = 0; x < props.x; x += 1) {
            this.state.cells.push(
                <Cell
                    key={`${x}-${y}`}
                    y={y}
                    x={x}
                    onChangedValue={props.handleChangedCell}
                    updateCells={props.updateCells}
                    value={props.rowData[x] || ''}
                />,
            )
        }

        return (
            <div>
                {this.state.cells}
            </div>
        )
    }
}

Row.propTypes = {
    handleChangedCell: PropTypes.func.isRequired,
    updateCells: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    rowData: PropTypes.shape({
    string: PropTypes.string,
    }).isRequired,
}

export default Row