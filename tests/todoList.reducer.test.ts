import { configureStore } from "@reduxjs/toolkit";
import todoReducer, {
  addTodo,
  clearTodo,
  removeTodo,
  toggleTodo,
} from "@/store/reducers/todoList/todoList.reducer";

describe("todoSlice reducer", () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: todoReducer });
  });

  it("should add a new todo to the state", () => {
    const mockTodo = { id: 1, text: "Test todo", isDone: false };
    store.dispatch(addTodo(mockTodo));

    expect(store.getState().todos).toHaveLength(1);
  });

  it("should not add a todo with a duplicated id", () => {
    const initialState = {
      todos: [
        { id: 1, text: "First Todo", isDone: true },
        { id: 2, text: "Second Todo", isDone: false },
      ],
    };
    store = configureStore({
      reducer: todoReducer,
      preloadedState: initialState,
    });

    const duplicatedTodo = { id: 1, text: "Test todo", isDone: false };

    expect(() => store.dispatch(addTodo(duplicatedTodo))).toThrowError(
      "Cannot add todo: A todo with the same ID already exists. Please ensure each todo has a unique ID.",
    );
  });

  it("should remove the specified todo from state (with valid Id)", () => {
    const initialStateWithTodos = {
      todos: [{ id: 1, text: "Test 1 todo", isDone: true }],
    };
    store = configureStore({
      reducer: todoReducer,
      preloadedState: initialStateWithTodos,
    });

    store.dispatch(removeTodo(1));

    expect(store.getState().todos).toHaveLength(0);
  });

  it("should remove the specified todo from state (with invalid Id)", () => {
    const initialStateWithTodos = {
      todos: [{ id: 1, text: "Test 1 todo", isDone: true }],
    };
    store = configureStore({
      reducer: todoReducer,
      preloadedState: initialStateWithTodos,
    });

    store.dispatch(removeTodo(2));

    expect(store.getState().todos).toHaveLength(1);
  });

  it("should remove the specified todo from state (without todos)", () => {
    store.dispatch(removeTodo(1));

    expect(store.getState().todos).toHaveLength(0);
  });

  it("should toggle the 'isDone' property of the specified todo", () => {
    const initialStateWithTodo = {
      todos: [{ id: 1, text: "Test todo", isDone: false }],
    };
    store = configureStore({
      reducer: todoReducer,
      preloadedState: initialStateWithTodo,
    });

    store.dispatch(toggleTodo(0));

    expect(store.getState().todos[0].isDone).toBe(true); // It should toggle from false to true
  });

  it("should clear all todos from the state", () => {
    const initialStateWithTodos = {
      todos: [
        { id: 1, text: "Test todo 1", isDone: false },
        { id: 2, text: "Test todo 2", isDone: true },
      ],
    };
    store = configureStore({
      reducer: todoReducer,
      preloadedState: initialStateWithTodos,
    });

    store.dispatch(clearTodo());

    expect(store.getState().todos).toHaveLength(0);
  });
});
