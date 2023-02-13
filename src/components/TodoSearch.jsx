import React from 'react'
import styled from 'styled-components'
const TodoSearch = ({search, setSearch,loading}) => {

  const onSearchValueChange = (event)=>{
   setSearch(event.target.value)
  }
  return (
    <>
      <InputSearch placeholder='You search..'
      onChange={onSearchValueChange}
      value={search}
      className={`${loading && 'active'}`}
      />
    </>
  )
}

const InputSearch = styled.input`
  &.active{
    opacity: 0.5;
  }
`

export default TodoSearch