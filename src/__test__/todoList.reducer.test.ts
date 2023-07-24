import { initialState } from "@/store/reducers/todoList/todoList.contants";
import {
  addTodo,
  clearTodo,
  removeTodo,
  todoSlice,
  toggleTodo,
} from "@/store/reducers/todoList/todoList.reducer";

describe("todoSlice addTodo", () => {
  it("should add a new todo to the state", () => {
    const mockTodo = { id: 1, text: "Test todo", isDone: false };
    const newState = todoSlice.reducer(initialState, addTodo(mockTodo));

    expect(newState.todos).toHaveLength(1);
  });
});

describe("todoSlice remove", () => {
  it("should remove the specified todo from state", () => {
    const initialStateWithTodos = {
      ...initialState,
      todos: [{ id: 1, text: "Test 1 todo", isDone: true }],
    };
    const newState = todoSlice.reducer(initialStateWithTodos, removeTodo(1));

    expect(newState.todos).toHaveLength(1);
  });
});

describe("todoSlice toggleTodo", () => {
  it("should toggle the 'isDone' property of the specified todo", () => {
    const initialStateWithTodo = {
      ...initialState,
      todos: [{ id: 1, text: "Test todo", isDone: false }],
    };
    const newState = todoSlice.reducer(initialStateWithTodo, toggleTodo(0));

    expect(newState.todos[0].isDone).toBe(true); // It should toggle from false to true
  });
});

describe("todoSlice clearTodo", () => {
  it("should clear all todos from the state", () => {
    const initialStateWithTodos = {
      ...initialState,
      todos: [
        { id: 1, text: "Test todo 1", isDone: false },
        { id: 2, text: "Test todo 2", isDone: true },
      ],
    };
    const newState = todoSlice.reducer(initialStateWithTodos, clearTodo());

    expect(newState.todos).toHaveLength(0);
  });
});
