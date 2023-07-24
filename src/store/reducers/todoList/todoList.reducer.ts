import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./todoList.types";
import { initialState } from "./todoList.contants";

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      if (!state.todos.find((todo) => todo.id === action.payload.id)) {
        state.todos.push(action.payload);
      } else {
        throw new Error(
          "Cannot add todo: A todo with the same ID already exists. Please ensure each todo has a unique ID.",
        );
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
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
