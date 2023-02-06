import React,{useState} from 'react';
import TodoCounter from 'components/TodoCounter'
import TodoSearch from 'components/TodoSearch'
import TodoList from 'components/TodoList'
import TodoItem from 'components/TodoItem'
import CreateTodoButton from 'components/CreateTodoButton'
import styled from 'styled-components'

const App = () => {
  
  const DefaultTodos = [
    {text:'Cut onions', completed:true},
    {text:'Wash onions', completed:false},
    {text:'Cook onions', completed:false},
  ]

  const [search, setSearch] = useState('');
  const [todos, setTodos] = useState(DefaultTodos);

  let searchedTodos = [];

  if(!search>=1){
    searchedTodos=todos;
  }else{
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLocaleLowerCase();
      return todoText.includes(searchText);

    })
  }

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }
  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }



  
  return (
    <>
      <Wrapper>
        <h1 className='H1Task'>Task manager</h1>
        <TodoCounter 
        todos={todos}
        />
        <TodoSearch 
        search={search}
        setSearch={setSearch}
        />
        <TodoList>
          {searchedTodos.map((todo)=>(
            <TodoItem todo={todo} key={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton/>
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




