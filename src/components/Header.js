import  PropTypes from 'prop-types'

//component import 
import Button from './Button'
import React from 'react'



const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
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