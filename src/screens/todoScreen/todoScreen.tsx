// TodoList.tsx
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import {
  addTodo,
  clearTodo,
} from "../../store/reducers/todoList/todoList.reducer";
import { Todo } from "../../store/reducers/todoList/todoList.types";
import { TodoList } from "./todoList/todoList";

const TodoScreen: React.FC = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: todoText,
        isDone: false,
      };
      dispatch(addTodo(newTodo)); // Make sure to dispatch the action
      setTodoText("");
    }
  };

  const handleClearTodo = () => {
    dispatch(clearTodo());
  };

  return (
    <View>
      <TextInput
        value={todoText}
        placeholder="Enter your task"
        onChangeText={setTodoText}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <Button title="Clear" onPress={handleClearTodo} />
      <TodoList />
    </View>
  );
};

export default TodoScreen;
