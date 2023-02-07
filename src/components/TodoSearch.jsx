import React, { useContext, useState } from 'react'
import {AppContext} from 'context/AppContext'
const TodoSearch = () => {

  const{search, setSearch} = useContext(AppContext)

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