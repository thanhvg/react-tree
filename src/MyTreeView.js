import React from 'react';
import ReactDOM from 'react-dom';
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

class MyTeeView extends React.Component {
    constructor(props){
        super(props);
        this.state = {display:'block'};
        this.setStyle = this.setStyle.bind(this);
    }

    setStyle() {
      this.setState((prepSate)=>{
        return {display:prepSate.display ==='none' ? 'block' :'none'}
      });

    }

    showChildren(children) {
      if(children)
      return <li> {children} </li>;
    }


render() {
    const style = {
        display: this.state.display
    };
    return (
        <div >
            <p onClick={this.setStyle}> {this.props.data.name} </p>
            <ul style={style}>
                <li>Hi</li>
                <li>Bye</li>
                {this.props.}

                {this.showChildren(this.props.children)}

            </ul>
        </div>
    );
}
}

export default MyTeeView;
