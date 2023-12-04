import { useState, useEffect } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  // fetch all todos from server

  useEffect(() => {
    axios.get("http://localhost:3000/todos")
      .then((response) => {
        console.log(response.data)
        setTodos(response.data);
      })
  }, [])

  return (
    <>
      <Todo todos={todos} />
    </>
  )
}

function Todo(props) {

  function deleteTodo(id) {
    axios.delete(`http://localhost:3000/todos/${id}`)
         .then(response => {
          console.log("Todo deleted successfully :" + response) 
         })
  }
  // Add a delete button here so user can delete a TODO.
  return <div>
    {props.todos.map(todo => (
      <div>
        {todo.title}
        <br />
        {todo.description}
        <button onClick={deleteTodo(todo.id)} >Delete</button>
      </div>
    ))}

  </div>
}

export default App
