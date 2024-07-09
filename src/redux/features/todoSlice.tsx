import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    id: string
    task: string,
    priority: string,
    description: string,
    isCompleted?: boolean
}

type TInitialState = {
    todos: TTodo[],
    todo?: TTodo
}

const initialState: TInitialState = {
    todos: [],
    todo: undefined
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
        },
        getTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            state.todo = todo
        },
        updateTodo: (state, action: PayloadAction<TTodo>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            todo!.description = action.payload.description
            todo!.task = action.payload.task
            todo!.priority = action.payload.priority
        }
    }
})

export const { addTodo, removeTodo, toggleComplete, getTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer