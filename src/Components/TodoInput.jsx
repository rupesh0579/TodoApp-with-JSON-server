import React, { useState } from "react";
import style from "../styles/TodoInput.module.css";

const TodoInput = ({addTodo}) => {
    //data -> argument - addTodo(data)

    //handling inputs in react
    const [text, setText] = useState("");
    
  return (
    <div className={style.input_div}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={()=> addTodo(text)}>Add Todo</button>
    </div>
  ); 
};

export default TodoInput;
