import  PropTypes from 'prop-types'
import React from 'react'
import { useLocation } from 'react-router-dom'
//component import 
import Button from './Button'




const Header = ({ title, onAdd, showAdd}) => {
  const location = useLocation()

  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && 
        <Button color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        }
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