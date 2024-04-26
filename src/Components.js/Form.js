import React from "react";
import styles from "../style.module.css";

const Form = ({ todo, setTodo, todoList, setTodolist }) => {
  
    const handle = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    setTodoList([...todoList, todo]);
    console.log(todoList);
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handle}
          className={styles.todoinput}
          placeholder="add items"
        ></input>
        <button type="submit" className={styles.todobutton}>Add</button>
      </form>
    </div>
  );
};

export default Form;
