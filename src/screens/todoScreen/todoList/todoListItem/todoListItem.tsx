import React from "react";
import { useTodoListItemStyles } from "./todoListItem.style";
import { Button, Checkbox, Space } from "@/components/";
import { View } from "react-native";
import { TrashIcon } from "@/icons/";
import {
  removeTodo,
  toggleTodo,
} from "@/store/reducers/todoList/todoList.reducer";
import { useDispatch } from "react-redux";

interface TodoListItemProps {
  index: number;
  label: string;
  isDone: boolean;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  index,
  label,
  isDone,
}) => {
  const styles = useTodoListItemStyles();
  const dispatch = useDispatch();

  const handleOnClickCheckbox = () => {
    dispatch(toggleTodo(index));
  };

  const handleOnClickRemove = () => {
    dispatch(removeTodo(index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxWrapper}>
        <Checkbox
          checked={isDone}
          label={label}
          onChange={() => handleOnClickCheckbox()}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          customStyle={{ container: styles.button }}
          onPress={() => handleOnClickRemove()}
        >
          <TrashIcon width={15} height={15} mainColor="#000" />
        </Button>
      </View>
    </View>
  );
};
