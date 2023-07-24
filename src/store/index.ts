import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter/counter.reducer";
import todoReducer from "./reducers/todoList/todoList.reducer";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    // Add other reducers here if needed
  },
  middleware: [thunk],
});

export default store;
