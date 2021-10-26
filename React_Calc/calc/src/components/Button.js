import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class button extends Component{
    handleClick=()=>{
        const {clickHandler,name}=this.props;
        clickHandler(name);
    };

    render(){
        const {name,background,wide}=this.props;

        return(
            <buttton
                style={
                    wide? {width: '50%', backgroundColor: background} : {width: '25%', backgroundColor: background}
                }
            >
                {name}
            </buttton>
        )
    }
}

button.propTypes={
    name: PropTypes.string.isRequired,
    wide: PropTypes.bool,
    background: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
};

button.defaultProps={
    wide: false,
    background: 'orange'
};

export default button;