import React, { useContext } from 'react'
import {AppContext} from 'context/AppContext'


const TodoCounter = () => {
  const {todos} = useContext(AppContext)
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  

  return (
    <div><h4>You've completed {completedTodos} out of {todos.length} TODOs</h4></div>
  )
}

export default TodoCounter