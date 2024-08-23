import React from "react"

export default function TodoList(props){

  return (
    <div>
      <li>
        {props.item}
        <span onClick={ ()=> {props.deleteTodo(props.index)} }>X</span>
      </li>
    </div>
  )
}
