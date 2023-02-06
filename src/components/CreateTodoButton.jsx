import React from 'react'
import styled from 'styled-components'

const CreateTodoButton = () => {
  const onClickButton = ()=>{
    alert('modal');
  }

  return (
    <ButtonAdd  
    type="submit" 
    value="+"
    onClick={onClickButton}
    
    />
  )
}
const ButtonAdd = styled.input`
  padding: 1rem 1rem;
  position: absolute;
  bottom: -30px;
`

export default CreateTodoButton