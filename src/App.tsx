import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Title from './components/Title'
function App() {

  return (
    <div className='items-center justify-center '>
      <div>
        <Title/>
      </div>
      <div>
        <AddTodo/>
      </div>
    </div>
  )
}

export default App
