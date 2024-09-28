import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
    id: number,
    text: string
  }

interface ITodosState {
    todoItems: ITodo[]
}

const initialState: ITodosState = {
    todoItems: [
        {
            id: 1,
            text: 'first Todo'
        }
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>){
            state.todoItems.push({
                id: Date.now(),
                text: action.payload
            })
        },
        deleteTodo(state, action: PayloadAction<number>){
           state.todoItems = state.todoItems.filter(todo => todo.id !== action.payload)
        }
    }
})


export const {addTodo, deleteTodo} = todoSlice.actions
export const todosReducers = todoSlice.reducer