import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const display=({result})=>(
    <div className="display">
        {result}
    </div>
);

display.defaultProps={
    result: '0'
};

display.propTypes={
    result: PropTypes.string
};

export default display;