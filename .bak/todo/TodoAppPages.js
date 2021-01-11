import React from 'react'
import { Link, Switch } from 'react-router-dom'
import TodoApp from '../components/TodoApp'

function TodoAppPages(props) {
  return (
    <>
      <TodoApp {...props} />
    </>
  )
}
export default TodoAppPages
