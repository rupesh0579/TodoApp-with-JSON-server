import React from 'react'

const SingleTodo = ({id, status, title,handleUpdate,handleTodoDelete}) => {
  return (
    <div style={{display : "flex",justifyContent:"center",paddingTop:"2rem"}}>
        <h3>{title}</h3>
        <button onClick= {()=> handleUpdate(id)}>{status ? "Done" : "Not Done"}</button>
        <button onClick={()=>handleTodoDelete(id)}>Delete</button>
    </div>
  )
}

export default SingleTodo