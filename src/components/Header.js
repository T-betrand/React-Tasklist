import  PropTypes from 'prop-types'

//component import 
import Button from './Button'
import React, { Component } from 'react'



const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color="black" text="Add" />
    </header>
  )
}




// Header property as an object
Header.defaultProps = {
    title: "Task tracker"
}

// Header prop type
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header 