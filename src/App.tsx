import { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  const onAddTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
