import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import NewTodoForm from "./newForm";
import { v4 as uuidv4 } from 'uuid';
import { FaClipboardList } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListPlus } from 'react-icons/bi';
import { AiFillStar, AiFillHome } from 'react-icons/ai';
import { motion, useScroll } from "framer-motion";
import { Link } from 'react-scroll';
import './App.css';

function TodoList() {

    const { scrollYProgress } = useScroll();


    const [todos, setTodos] = useState([]);



    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setTodos(items);
        }
    }, []);

    const create = newTodo => {
        setTodos([...todos, newTodo]);
        localStorage.setItem('items', JSON.stringify([...todos, newTodo]));
    };

    const remove = id => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('items', JSON.stringify(updatedTodos));
    };

    const update = (id, updtedTask) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updtedTask };
            }
            return todo;
        });
        setTodos(updatedTodos);
        localStorage.setItem('items', JSON.stringify(updatedTodos));
    };

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
        localStorage.setItem('items', JSON.stringify(updatedTodos));
    };





    const todosList = todos.map((todo, index) => (
        <Todo
            toggleComplete={toggleComplete}
            update={update}
            remove={remove}
            key={index}
            todo={todo}
        />
    ));

    return (
        <>
            <header name="home">

                <div className="wrapper">
                    <motion.div
                        className="container"
                    >
                        <motion.div
                            className="item"
                            style={{
                                scaleY: scrollYProgress
                            }}
                        />
                    </motion.div>
                </div>

                <nav>
                    <ul>
                        <h2>MonToDo</h2>
                        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >HOME<AiFillHome /></Link></li>
                        <li><Link activeClass="active" to="tasks" spy={true} smooth={true} duration={500} >TASKS <BsCardChecklist /></Link></li>
                        <li><Link activeClass="active" to="stared" spy={true} smooth={true} duration={500} >STARED  <AiFillStar /></Link></li>
                        <li><Link activeClass="active" to="create" spy={true} smooth={true} duration={500} >CREATE  <BiListPlus /></Link></li>
                    </ul>
                </nav>

                <div className='header-container'>
                    <div className='header-texts'>
                        <h1>Make Your Time <b style={{ color: 'rgb(var(--orange-color))' }}>Organized</b></h1>
                        <p>Make each task with it specific time , to make your life a lot easier <br />and make your time much meanful</p>
                    </div>
                    <div className='task-box'></div>
                </div>

            </header>



            <section id='tasks' name="tasks">
                <h2>YOUR TASKS</h2>

                <NewTodoForm createTodo={create} />

                <div className='todo-container'>

                    {todos ? <ul>{todosList}</ul> : <h1>No Tasks </h1>}



                </div>


            </section>


            <footer>

            </footer>

        </>
    );
}

export default TodoList;
