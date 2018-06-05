import React from 'react';
import Header from '../containers/Header';
import Table from '../containers/Table';
require('../../scss/style.scss');

const App = () => (
    <div>
        <Header/>
        <Table x={4} y={4}/>
    </div>
);

export default App;