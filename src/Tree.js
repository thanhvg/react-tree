import React from 'react';
import ReactDOM from 'react-dom';
import {Treebeard} from 'react-treebeard';
import update from 'immutability-helper';

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

class Tree extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled){
        if(this.state.cursor){
          // this.state.cursor.active = false;
          // this.setState({cursor: {active: false}});
          // let currentCursor = this.state.cursor
          // const newState = update(this.state, {cursor:{$set:{active:false}}});
          // console.log(newCursor);
          // console.log('newState');
          // console.log(newState);
          // this.setState(newState,()=> {
          //   console.log('after setState');
          //   console.log(this.state);
          // });
          console.log(this.state.cursor.active);
        }
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
        // console.log(node);
    }
    render(){
        return (
            <Treebeard
                data={data}
                onToggle={this.onToggle}
            />
        );
    }
}

export default Tree;
