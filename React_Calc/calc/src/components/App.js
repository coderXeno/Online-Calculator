import React, {Component} from 'react';
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css"

class App extends Component{
    constructor(){
        super();
        this.state={
            total: null,
            next: null
        };
    }

    handleClick = btnName => this.setState(previous => calculate(previous,btnName));

    render(){
        const {total,next}=this.state;
        return(
            <div className="App">
                <h1>React Calculator</h1>
                <div className="calculator">
                    <Display result={next || total} />
                    <ButtonPanel clickHandler={this.handleClick} />
                </div>
            </div>
        );
    }
}

export default App;
