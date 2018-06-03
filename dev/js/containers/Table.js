import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"], ["row 3, cell 1", "row 2, cell 2"]]
        }

        this.addRow = this.addRow.bind(this);
        this.createTable = this.createTable.bind(this);
    }

    createTable(tableData) {
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');

        tableData.forEach(function(rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function(cellData) {
          var cell = document.createElement('td');
          cell.appendChild(document.createTextNode(cellData));
          row.appendChild(cell);
        });

        tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        document.body.appendChild(table);
    }

    addRow() {
        var rows = this.state.rows
        rows.push('new row')
        this.setState({rows: rows})
    }

    render() {
        return (
        <div>
            <div>{this.createTable(this.state.rows)}</div>
            <button id="addBtn" onClick={this.addRow}>ADD</button>
        </div>
        )
    }
}


function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
       testState: state
    };
}

export default connect(mapStateToProps)(Table); // this is now a contanier

