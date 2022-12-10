import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return <button className='btn'>Add</button>     
}


Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string, 
}


export default Button 