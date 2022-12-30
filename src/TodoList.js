import React, { useState , useEffect } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import NewTodoForm from "./newForm";
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: uuidv4(), task: "task 1", completed: false },
        { id: uuidv4(), task: "task 2", completed: true }
    ]);



    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setTodos(items);
        }
    }, []);

    const create = newTodo => {
        console.log(newTodo);
        setTodos([...todos, newTodo]);
        localStorage.setItem('items', JSON.stringify([...todos, newTodo]));
    };

    const remove = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const update = (id, updtedTask) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updtedTask };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const todosList = todos.map(todo => (
        <Todo
            toggleComplete={toggleComplete}
            update={update}
            remove={remove}
            key={todo.id}
            todo={todo}
        />
    ));

    return (
        <div className="TodoList">
            <h1>
                Todo List <span>A simple React Todo List App</span>
            </h1>
            <ul>{todosList}</ul>
            <NewTodoForm createTodo={create} />
        </div>
    );
}

export default TodoList;
