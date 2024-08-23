import React, {useState} from 'react'

function Todo(props){

    const [task, setTask] = useState('');
    function handleEnterKey(){

    }

  return (
    <>
      <input type="text" placeholder='Enter Your Todo' 
        value={task}
        onChange={ (e) =>setTask(e.target.value) } 
        onKeyDown = {handleEnterKey} />

      <button onClick= {()=>{
        props.addTodoToList(task)
        setTask('')
      }} >Add</button>

    </>
  )
}

export default Todo