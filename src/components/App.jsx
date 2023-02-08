import React from 'react'
import AppUI from 'components/AppUI'
import {TodoProvider} from 'context/AppContext'

const App = () => {
  return (
    <TodoProvider>
        <AppUI/>
    </TodoProvider>

  )
}

export default App