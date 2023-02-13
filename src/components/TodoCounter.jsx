import React from 'react'
import styled from 'styled-components'

const TodoCounter = ({todos,loading}) => {
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  return (
    <div><Text className={`${loading && 'active'}`}>You've completed {completedTodos} out of {todos.length} TODOs</Text></div>
  )
}
const Text = styled.h4`
  &.active{
    opacity: 0.5;
  }
`


export default TodoCounter