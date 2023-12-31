import React from "react";
import { FlatList } from "react-native";
import { TodoListItem } from "./todoListItem/todoListItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";

export const TodoList: React.FC = () => {
  const todos2 = useSelector((state: RootState) => state.todo.todos);

  return (
    <FlatList
      data={todos2}
      renderItem={({ item: todoItem, index }) => (
        <TodoListItem
          index={index}
          label={todoItem.text}
          isDone={todoItem.isDone}
        />
      )}
    />
  );
};
