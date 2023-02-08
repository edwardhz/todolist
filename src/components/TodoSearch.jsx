import React from 'react'
const TodoSearch = ({search, setSearch}) => {

  const onSearchValueChange = (event)=>{
   setSearch(event.target.value)
  }
  return (
    <>
      <input placeholder='..'
      onChange={onSearchValueChange}
      value={search}
      />
    </>
  )
}

export default TodoSearch