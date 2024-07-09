import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    id: string
    task: string,
    description: string,
    isCompleted?: boolean
}

type TInitialState = {
    todos: TTodo[]
}

const initialState: TInitialState = {
    todos: []
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload)
            state.todos = filteredTodos
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            todo!.isCompleted = !todo?.isCompleted
        }
    }
})

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer