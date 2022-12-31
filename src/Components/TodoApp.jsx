import React, { Fragment } from "react";
import { useState } from "react";
import AllTodos from "./AllTodos";
import Navbar from "./Navbar";
import TodoInput from "./TodoInput";

const TodoApp = () => {
  const [title, setTitle] = useState("Todo App Rupesh");
  const [todos, setTodos] = useState([]);

  const addTodo = (data) =>{
    alert(data);

    const payload = {
      title: data,
      id:Date.now(),
      status:false
    }

    //we need to update todos array
    //setTodos
    setTodos([...todos, payload])
  }

  const handleUpdate = (id) =>{
    const newTodos = todos.map((todo)=>{
      if(todo.id === id){
        return{...todo, status: !todo.status}
      }
      else{
        return todo;
      }
    })
    setTodos(newTodos)
  }

  const handleTodoDelete =(id) =>{
    const newTodos = todos.filter((todo)=>todo.id !== id);
    setTodos(newTodos);
  }
  return (
    <Fragment>
      <Navbar title={title}/>
      <TodoInput addTodo={addTodo}/>
      <AllTodos todos={todos} handleTodoDelete={handleTodoDelete} handleUpdate={handleUpdate}/>
    </Fragment>
  );
};

export default TodoApp;
