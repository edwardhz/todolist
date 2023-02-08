import React,{useState,useEffect, useContext} from 'react';
import TodoCounter from 'components/TodoCounter'
import TodoSearch from 'components/TodoSearch'
import TodoForm from 'components/TodoForm'
import TodoList from 'components/TodoList'
import TodoItem from 'components/TodoItem'
import TodoHeader from 'components/TodoHeader'
import CreateTodoButton from 'components/CreateTodoButton'
import styled from 'styled-components'
import {TodoProvider,AppContext} from 'context/AppContext'
import Modal from 'components/Modal'
import ContentLoader from "react-content-loader"



const AppUI = () => {

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
    setModal
  } = useContext(AppContext);

  return (
    <>
    <Wrapper>
      <TodoHeader>
          <h1 className='H1Task'>Task manager</h1>
          <TodoCounter 
            todos={todos}
          />
          <TodoSearch
            search={search}  setSearch={setSearch}
          />
      </TodoHeader>
          <TodoList>
            {loading &&
            <>
              <ContentLoader
                viewBox="0 0 400 160"
                height={100}
                width={300}
                backgroundColor="#F55D3E"
              >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
              </ContentLoader>
            </>
            }
            {(todos.length < 1 && !loading) && <p>Agrega tu primer todo</p>}
            {error && <p>Hubo un error</p>}
            {searchedTodos.map((todo)=>(
              <TodoItem todo={todo} key={todo.text}
              onComplete={() => (completeTodo(todo.text))}
              onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          {modal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
      <CreateTodoButton 
        setModal={setModal}
      />
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

export default AppUI




