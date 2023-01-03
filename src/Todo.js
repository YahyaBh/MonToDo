import React, { useState } from "react";
import moment from "moment/moment";

function Todo({ todo, remove, update, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    const handleClick = evt => {
        remove(evt.target.id);
    };
    const toggleFrom = () => {
        setIsEditing(!isEditing);
    };
    const handleUpdate = evt => {
        evt.preventDefault();
        update(todo.id, task);
        toggleFrom();
    };
    const handleChange = evt => {
        setTask(evt.target.value);
    };
    const toggleCompleted = evt => {
        toggleComplete(evt.target.id);
    };


    let result;
    if (isEditing) {
        result = (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input onChange={handleChange} value={task} type="text" />
                    <button>Save</button>
                </form>
            </div>
        );
    } else {
        result = (
            <div className={todo.completed ? "Todo disabled" : "Todo "}>
                <li
                    id={todo.id}
                    onClick={toggleCompleted}
                    className={todo.completed ? "Todo-task completed" : "Todo-task"}
                >
                    {todo.task} </li>
                <sup style={{fontSize : '14px' , marginLeft : '2px'}}> {moment(todo.date, "MMMM Do YYYY, h:mm:ss a").fromNow()}</sup>
                <div className="Todo-buttons">
                    <button onClick={toggleFrom}>
                        <i className="fas fa-pen" />
                    </button>
                    <button onClick={handleClick}>
                        <i id={todo.id} className="fas fa-trash" />
                    </button>
                </div>
            </div>
        );
    }
    return result;
}

export default Todo;
