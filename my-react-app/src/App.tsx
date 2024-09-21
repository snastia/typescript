import './App.css';
import { useState } from 'react';
import { ToDo } from './components/ToDo';
import { ToDoForm } from './components/ToDoForm';

export interface IToDo{
  id: number,
  text: string,

}

function App() {

  return (
    <div>
      <h1>To Do list</h1>

      <ToDoForm addToDo={addToDo}/>

      <ul>{toDos.map((toDo) => {
        return <ToDo key={toDo.id} removeToDo={deleteToDo} item={toDo}/>
      })}</ul>
    </div>
  )
}

export default App;
