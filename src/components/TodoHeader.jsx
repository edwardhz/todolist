import React from 'react'
import styled from 'styled-components'

const TodoHeader = ({children,loading}) => {

  


  return (
    <TodoHeaderStyled>
    {React.Children
      .toArray(children)
      .map(child => React.cloneElement(child, {loading}))}
    </TodoHeaderStyled>
  )
}

const TodoHeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

`
export default TodoHeader