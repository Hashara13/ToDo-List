import Header from "./Components.js/Header";
import Form from "./Components.js/Form";
//import Todo from "./Components.js/Todo";
import TodoList from "./Components.js/TodoList";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList}/>

    </div>
  );
}

export default App;
