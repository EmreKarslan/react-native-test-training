export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export interface TodoListState {
  todos: Todo[];
}
