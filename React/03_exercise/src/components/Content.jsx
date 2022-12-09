import React, { useState } from 'react'

// Styling of the Content Component
const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '150px',
}

const unSelectable = {
  WebkitUserSelect: 'none', /* Safari */
  msUserSelect: 'none', /* IE 10 and IE 11 */
  userSelect: 'none', /* Standard syntax */
}

const Content = () => {
  const [name, setName] = useState("Wasif")
  
  // Text change using Double Click Method with handleNameChange
  const handleNameChange = () => {
    const names = ["Wasif", "Akif", "Atif"]
    const randomNames = names[Math.floor(Math.random() * (names.length))]
    setName(randomNames)
  }

  return (
    <div style={contentStyle}>
      <p style={unSelectable} onDoubleClick={() => handleNameChange()}>Hello {name} 👋</p>
    </div>
  )
}

export default Content
