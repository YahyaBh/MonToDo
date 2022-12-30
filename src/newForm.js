import React, { useState, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewTodoForm({ task, createTodo }) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            task: ""
        }
    );

    const handleChange = evt => {
        setUserInput({ [evt.target.name]: evt.target.value });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const newTodo = { id: uuidv4(), task: userInput.task, completed: false };
        createTodo(newTodo);
        setUserInput({ task: "" });
    };

    return (

        <form className="form__group field" onSubmit={handleSubmit}>

            <input value={userInput.task}
                onChange={handleChange}
                id="task"
                type="text"
                name="task"
                className="form__field" placeholder="Task"
            />
            <label htmlFor="task" className="form__label">New todo</label>

            <button>Add Todo</button>
        </form>

    );
}

export default NewTodoForm;
