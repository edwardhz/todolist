import React from 'react'
import styled from 'styled-components'

const TodoItem = (props) => { 

  
  return (
    <Item >  
      <p onClick={props.onComplete} className={`${props.todo.completed==true && `pCompleted backgroundCompleted`}`}>{props.todo.text}</p>
      <input type="submit" value="x" className='btnDelete' onClick={props.onDelete}/>
    </Item>
  )
}

const Item = styled.li`
  padding: 5px 20px;
  background-color: white;
  border-radius: 5%;
  list-style: none;
  margin: 5px 5px;
  position: relative;
  .btnDelete{
    position: absolute;
    right: -10px;
    width: 20px;
    height: 20px;
  }
  p{
    display: inline-block;
    cursor: pointer;
  }
  .pCompleted{
    text-decoration: line-through;
    color: green;
    opacity: 0.5;
  }

`

export default TodoItem