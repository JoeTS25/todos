import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const createTodo = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

    const updateTodo = (id, updatedTask) => {
        setTodos(todos => 
            todos.map(todo => 
                todo.id === id ? { ...todo, task: updatedTask } : todo
            )
        );
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const todoFeatures = todos.map(todo => (
        <Todo 
            remove={remove}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            update={updateTodo}/>
    ));

    return (
        <div>
            <NewTodoForm createTodo={createTodo} />
            <ul>{todoFeatures}</ul>
        </div>
    );
}

export default TodoList;