import React from 'react'
import SingleTodo from './SingleTodo'


const AllTodos = ({todos,handleUpdate,handleTodoDelete}) => {
  return (
    <div>{todos.map((todo) => <SingleTodo{...todo} handleUpdate={handleUpdate} handleTodoDelete={handleTodoDelete}/>)}</div>
  )
}

export default AllTodos