import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

class buttonPanel extends Component {
    handleClick = btnName => {
        const { clickHandler } = this.props;
        clickHandler(btnName);
    };

    render() {
        return (
            <div className="buttonPanel">
                <div className="group-1">
                    <Button name="AC" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="+/-" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="%" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="÷" clickHandler={this.handleClick} />
                </div>
                <div className="group-2">
                    <Button name="7" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="8" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="9" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="X" clickHandler={this.handleClick} />
                </div>
                <div className="group-3">
                    <Button name="4" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="5" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="6" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick} />
                </div>
                <div className="group-4">
                    <Button name="1" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="2" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="3" background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} />
                </div>
                <div className="group-5">
                    <Button name="0" background="#e0e0e0" wide clickHandler={this.handleClick} />
                    <Button name="." background="#e0e0e0" clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} />
                </div>
            </div>
        );
    }
}

buttonPanel.PropTypes={
    clickHandler: PropTypes.func.isRequired
};

export default buttonPanel;