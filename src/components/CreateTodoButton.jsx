import React from 'react'
import styled from 'styled-components'

const CreateTodoButton = ({setModal}) => {
  const onClickButton = ()=>{
    setModal(prevState => !prevState);
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
  z-index: 1;
  padding: 1rem 1rem;
  position: absolute;
  bottom: -30px;
`

export default CreateTodoButton