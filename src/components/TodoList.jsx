import React from 'react'

const TodoList = (props) => {
  return (
    <div>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.todos.length && !props.loading) && props.onEmptyTodos()}
      {(!props.searchedTodos.length && !props.loading && props.todos) && props.onEmptySearch(props.search)}
      {/* {props.searchedTodos.map(props.render)} */}

      <ul>
        {(!props.error && !props.loading) && props.searchedTodos.map(todo=>props.children(todo))}
      </ul>
    </div>
  )
}

export default TodoList