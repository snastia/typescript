import './App.css';
import { ToDo } from './components/ToDo';
import { ToDoForm } from './components/ToDoForm';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './components/selectors';
import { addTodo } from './components/slice';
import { deleteTodo } from './components/slice';

export interface IToDo{
  id: number,
  text: string,

}

function App() {
  const todos = useSelector(getTodos)
  const dispatch = useDispatch()

  const handleAddToDo = (text: string) => {
     dispatch(addTodo(text))
  }

  const handleDeleteToDo = (id: number) => {
    dispatch(deleteTodo(id))
 }

  return (
    <div>
      <h1>To Do list</h1>

      <ToDoForm addToDo={handleAddToDo}/>

      <ul>{todos.map((toDo) => {
        return <ToDo key={toDo.id} removeToDo={handleDeleteToDo} item={toDo}/>
      })}</ul>
    </div>
  )
}

export default App;
