import React, { Component } from 'react';

class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        };
    }
    addAgeCount = () => {
        this.setState({age: this.state.age+1})
    }
    subAgeCount = () => {
        this.setState({age: this.state.age-1})
    }
    render(){
        const { firstName, lastName, hairColor } = this.props;
        return(
            <div className="mx-auto w-50 mt-5">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button className="btn btn-primary" onClick={ this.addAgeCount }>Birthday Button for {firstName} {lastName}</button>
                <button className="btn btn-primary m-3" onClick={ this.subAgeCount }>-1</button>
            </div>
        );
    }
}

export default MainComponent;