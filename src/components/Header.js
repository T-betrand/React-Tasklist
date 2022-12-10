import  PropTypes from 'prop-types'

//component import 
import Button from './Button'
import React from 'react'



const Header = ({ title }) => {

    const onClick = () => {
        console.log('click')
    }


  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color="black" text="Add" onClick={onClick} />
    </header>
  )
}




// Header property as an object
Header.defaultProps = {
    title: "Task List"
}

// Header prop type
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header 