import React from 'react'

  const headerStyle = {
    width: '100%',
    background: 'black',
    color: 'white',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

const Header = () => {
  return (
    <h1 style={headerStyle}>To Do List</h1>
  )
}

export default Header