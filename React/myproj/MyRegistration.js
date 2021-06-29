import React, { Component } from 'react'

export default class MyRegistrationClass extends Component {
    
    age;
    constructor(){
        super();
        this.age= 100;
        this.state = {
            label:"MyHeading",
            myage : this.age,
            count: 0
        }

        

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick = () => {
        
        this.setState({
            ...this.state,
            label:"Updated Text" + new Date(),
            count : this.state.count +1
        })
    }


    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleOnClick}>{this.state.label}</button>
            </div>
        )
    }
}