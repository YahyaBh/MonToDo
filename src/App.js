// import './App.css';
// import { useEffect, useState } from 'react';
// import { FaClipboardList } from 'react-icons/fa';
// import { BsCardChecklist } from 'react-icons/bs';
// import { BiListPlus } from 'react-icons/bi';
// import { AiFillStar, AiFillHome } from 'react-icons/ai';
// import { motion, useScroll } from "framer-motion";
// import { Link } from 'react-scroll';
// import ToDo from './ToDo/todo'
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Todo from "./Todo";
// import NewTodoForm from "./NewTodoForm";
// import uuid from "uuid";

// function App() {



//   const { scrollYProgress } = useScroll();

//   const [todos, setTodos] = useState([
//     { id: uuid(), task: "task 1", completed: false },
//     { id: uuid(), task: "task 2", completed: true }
//   ]);

//   const create = newTodo => {
//     console.log(newTodo);
//     setTodos([...todos, newTodo]);
//   };

//   const remove = id => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const update = (id, updtedTask) => {
//     const updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         return { ...todo, task: updtedTask };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const toggleComplete = id => {
//     const updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         return { ...todo, completed: !todo.completed };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const todosList = todos.map(todo => (
//     <Todo
//       toggleComplete={toggleComplete}
//       update={update}
//       remove={remove}
//       key={todo.id}
//       todo={todo}
//     />
//   ));

//   return (
//     <>
//       <header name="home">

//         <div className="wrapper">
//           <motion.div
//             className="container"
//           >
//             <motion.div
//               className="item"
//               style={{
//                 scaleY: scrollYProgress
//               }}
//             />
//           </motion.div>
//         </div>

//         <nav>
//           <ul>
//             <h2>MonToDo</h2>
//             <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >HOME<AiFillHome /></Link></li>
//             <li><Link activeClass="active" to="tasks" spy={true} smooth={true} duration={500} >TASKS <BsCardChecklist /></Link></li>
//             <li><Link activeClass="active" to="stared" spy={true} smooth={true} duration={500} >STARED  <AiFillStar /></Link></li>
//             <li><Link activeClass="active" to="create" spy={true} smooth={true} duration={500} >CREATE  <BiListPlus /></Link></li>
//           </ul>
//         </nav>

//         <div className='header-container'>
//           <div className='header-texts'>
//             <h1>Make Your Time <b style={{ color: 'rgb(var(--orange-color))' }}>Organized</b></h1>
//             <p>Make each task with it specific time , to make your life a lot easier <br />and make your time much meanful</p>
//           </div>
//           <div className='task-box'></div>
//         </div>

//       </header>


//       <section id='tasks' name="tasks">
//         <h2>YOUR TASKS</h2>




//         <div className="form__group field">
//           <input type="input" value={input} onChange={handleChange} className="form__field" placeholder="Task" name="task" id='task' />
//           <button onClick={formSubmit}>Check</button>
//           {/* <label htmlFor="name" className="form__label"  createTodo={create}>Add Task</label> */}
//           <NewTodoForm createTodo={create} />


//         </div>

//         <div className='todo-container'>

//         <ul>{todosList}</ul>


//         </div>


//       </section>



//     </>
//   );
// }
