import React from 'react'


const TodoCounter = ({todos}) => {
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  return (
    <div><h4>You've completed {completedTodos} out of {todos.length} TODOs</h4></div>
  )
}

export default TodoCounter