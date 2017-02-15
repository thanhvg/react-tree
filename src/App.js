import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from './Tree.js'
import MyTree from './MyTree.js'
// import MyTreeView from './MyTreeView.js'
import DisplayChildren from './DisplayChildren.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My React Playground</h2>
        </div>

        <MyTree />

        <MyTree><MyTree /></MyTree>

        <DisplayChildren data={data} />
      </div>
    );
  }
}

export default App;

const data = {
    name: 'location',
    toggled: true,
    children: [
        {
            name: 'Canada',
            country: true,
            children: [
                { name: 'Quebec' },
                { name: 'Alberta' }
            ]
        },
        {
            name: 'US',
            loading: true,
            country: true,
            children: []
        },
        {
            name: 'Vietnam',
            children: [
                {
                    name: 'Hanoi',
                    children: [
                        { name: 'gateway1',
                          me:'huh' ,
                          children: [
                            {name: 'machine1'},
                            {name: 'machine2'}
                          ]
                        },
                        { name: 'gateway2' }
                    ]
                }
            ]
        }
    ],
};
