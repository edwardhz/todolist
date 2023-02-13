import React from 'react'
import ContentLoader from "react-content-loader"


const TodosLoading = () => {
  return (
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
  )
}

export default TodosLoading 