import React, { Component } from 'react';
import './App.css';
import FixedTable from './FixedTable.js'
import MyGriddle from './MyGriddle.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My React Playground</h2>
        </div>

        <FixedTable />
        <MyGriddle />

      </div>
    );
  }
}

export default App;
