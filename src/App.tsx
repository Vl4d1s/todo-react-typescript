import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosProvider from "./store/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <NewTodo />
      <Todos />
    </TodosProvider>
  );
}

export default App;
