import React from 'react'

const footerStyle = {
  width: '100%',
  background: 'black',
  color: 'white',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: '0px',
}

const getYear = () => {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <div style={footerStyle}>
      <span>
          © {getYear()} Rao Akif
      </span>
    </div>
  )
}

export default Footer