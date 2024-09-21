import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "./ToDo";

const initialState = ToDo[] = []

const toDoSlice = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        addToDo(state, action: PayloadAction<string>){
            state.push({
               id: Date.now(),
               text: action.payload
               completed: false
            })
        }

        deleteToDo(state, action){
        const res = toDos.filter((toDo) => {
            return toDo.id !== id
        })
        setToDos(res)
    }}
}
        
)