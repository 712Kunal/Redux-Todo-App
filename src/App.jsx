import { useState } from 'react'
import './App.css'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'

function App() {

  return (
    <>
      <h1 className='text-2xl text-center'>TODO LIST</h1>
        <AddTodo />
        <Todos />
    </>
  )
}

export default App
