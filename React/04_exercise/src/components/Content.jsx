import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import '../index.css'

// Styling of the Content Component
const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',
  marginRight: 'auto',
  marginLeft: 'auto',
  background: '#F5F5F5',
  width: '300px'
}

const checkboxStyle = {
  width: '30px',
  height: '30px'
}

const deleteButtonStyle = {
  width: '30px',
  height: '30px',
}

const Content = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      checked: false,
      text: 'item no 1'
    },
    {
      id: 2,
      checked: false,
      text: 'item no 2'
    },
    {
      id: 3,
      checked: false,
      text: 'item no 3'
    },
  ])

  const handleCheck = (id) => {
    const newTodos = todos.map(todo => (todo.id === id)? {...todo, checked: !todo.checked} : todo)
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div style={contentStyle}>
      {
        todos.length === 0 ? (<h2>There is no work to do</h2>)
        :
        (<ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input style={checkboxStyle} onChange={() => handleCheck(todo.id)} type="checkbox" checked={todo.checked} />
              <p className='todo-style' style={(todo.checked) ? {textDecoration: 'line-through'} : null} onDoubleClick={() => handleCheck(todo.id)}>{todo.text}</p>
              <MdDelete type='button' className='deleteButton' style={deleteButtonStyle} onClick={() => handleDelete(todo.id)} />
            </li>
          ))}
        </ul>)
      }
    </div>
  )
}

export default Content