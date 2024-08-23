import { useState } from 'react'
import TodoList from './component/TodoList';
import Todo from './component/Todo';


function App() {
  const [todoItem, setTodoItem] = useState([]);

  let addTodoToList = (task) =>{
    if(task !==""){
      setTodoItem([...todoItem, task])
    }
  }

  function deleteTodo(index){
    let newTodoItem = todoItem.filter((item,i)=> i !== index)
    setTodoItem(newTodoItem)
  }

  return (
    <div>
      <h1>Todos</h1>
      <Todo addTodoToList={addTodoToList} />
      <hr />
      {
        todoItem.map((item, i)=>{
          return <TodoList key={i} index = {i} item = {item}  deleteTodo={deleteTodo} />
        })
      }
     
    </div>
  )
}

export default App
