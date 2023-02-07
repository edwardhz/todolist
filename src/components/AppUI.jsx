import React from 'react'
import App from 'components/App'
import {TodoProvider} from 'context/AppContext'

const AppUI = () => {
  return (
    <TodoProvider>
        <App/>
    </TodoProvider>

  )
}

export default AppUI