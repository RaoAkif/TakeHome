import React from 'react'

const contentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '100px'
}

const names = ["Wasif", "Akif", "Atif"]

const randomNames = names[Math.floor(Math.random() * (names.length))]

const Content = () => {
  return (
    <div style={contentStyle}>Hello {randomNames} 👋</div>
  )
}

export default Content
