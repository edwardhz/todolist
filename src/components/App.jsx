import React,{useState,useEffect, useContext} from 'react';
import TodoCounter from 'components/TodoCounter'
import TodoSearch from 'components/TodoSearch'
import TodoForm from 'components/TodoForm'
import TodoList from 'components/TodoList'
import TodoItem from 'components/TodoItem'
import TodoHeader from 'components/TodoHeader'
import CreateTodoButton from 'components/CreateTodoButton'
import styled from 'styled-components'
import useTodos from 'hooks/useTodos'
import Modal from 'components/Modal'
import ContentLoader from "react-content-loader"

import TodosError from 'components/TodosError'
import TodosLoading from 'components/TodosLoading'
import TodosEmpty from 'components/TodosEmpty'
import {ChangeAlert} from 'components/hoc/ChangeAlert'

const App = () => {

  const {loading,
    error,
    search,
    setSearch,
    searchedTodos,
    completeTodo,
    deleteTodo,
    todos,
    saveTodos,
    modal,
    setModal,
    addTodo,
    syncItem
  } = useTodos();
  return (
    <>
    <Wrapper>
    <h1 className='H1Task'>Task manager</h1>
      <TodoHeader loading={loading}>
        <>  
            <TodoCounter 
              todos={todos}
            />
            <TodoSearch
              search={search}  setSearch={setSearch}
            /> 
        </>  
      </TodoHeader>
    
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        todos={todos}
        search={search}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos={()=> <TodosEmpty/>}
        onEmptySearch={(search)=>
            (search.length>=1 && searchedTodos.length==0) ? <p>No hay resultados de busqueda de "{search}"</p> : ''
          }
        // render=
        >
          {todo=>(
          <TodoItem todo={todo} key={todo.text}
          onComplete={() => (completeTodo(todo.text))}
          onDelete={() => deleteTodo(todo.text)}
          />
        )}
        </TodoList>
      {modal && (
        <Modal>
          <TodoForm addTodo={addTodo} setModal={setModal}/>
        </Modal>
      )}
      <CreateTodoButton 
        setModal={setModal}
      />
      <ChangeAlert syncItem={syncItem}/>
      
    </Wrapper>    
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 5rem 5rem;
  box-shadow: 2px 2px 17px 7px rgba(0,0,0,0.51);
  background-color: #878e88;
  border-radius: 5%;

  
  
  .H1Task{
    color: #f55d3e;
    margin-bottom: 1rem;
    font-size: 3rem;
    position: relative;
  }
`


export default App