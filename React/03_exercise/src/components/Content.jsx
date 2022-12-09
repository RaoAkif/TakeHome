import React, { useState } from 'react'

// Styling of the Content Component
const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '150px',
}

const listStyle = {
  paddingTop: '10px',
}

const unSelectable = {
  WebkitUserSelect: 'none', /* Safari */
  msUserSelect: 'none', /* IE 10 and IE 11 */
  userSelect: 'none', /* Standard syntax */
}

// Button One Method
const handleButton1 = () => {
  console.log("Button 1 has been clicked")
}

// Button Two Method
const handleButton2 = (input) => {
  console.log(`${input} have been called from Button 2`)
}

// Button Three Method
const handleButton3 = (e) => {
  console.log(e.target.innerText)
}

const Content = () => {
  const [name, setName] = useState("Wasif")
  
  // Text Double Click Method
  const handleNameChange = () => {
    // Names Generation
    const names = ["Wasif", "Akif", "Atif"]
    const randomNames = names[Math.floor(Math.random() * (names.length))]
    setName(randomNames)
  }

  return (
    <div style={contentStyle}>
      <p style={unSelectable} onDoubleClick={() => handleNameChange()}>Hello {name} 👋</p>
      <div style={listStyle}>
        <button onClick={handleButton1}>Click It</button>
        <button onClick={() => handleButton2(randomNames)}>Click It</button>
        <button onClick={(e) => handleButton3(e)}>Click It</button>
      </div>
    </div>
  )
}

export default Content
