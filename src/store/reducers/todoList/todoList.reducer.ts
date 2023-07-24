import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./todoList.types";
import { initialState } from "./todoList.contants";

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos[action.payload].isDone = !state.todos[action.payload].isDone;
    },
    clearTodo: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
