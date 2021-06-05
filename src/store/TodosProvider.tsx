import React, { useState } from "react";
import Todo from "../models/todo";
import TodosContext, { TodosContextObj } from "./todos-context";

const TodosProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const contexValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contexValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
