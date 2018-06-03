import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: ['row 1', 'row 2', 'row 3']
        }

        this.addRow = this.addRow.bind(this);
    }

    addRow() {
        var rows = this.state.rows
        rows.push('new row')
        this.setState({rows: rows})
    }

    render() {
        return (
        <div>
            <table>
                {this.state.rows.map((r) => (
                  <tr>
                      <td>{r}</td>
                  </tr>
                ))}
            </table>
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

