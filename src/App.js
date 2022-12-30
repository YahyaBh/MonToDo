import './App.css';
import { useEffect, useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListPlus } from 'react-icons/bi';
import { AiFillStar, AiFillHome } from 'react-icons/ai';
import { motion, useScroll } from "framer-motion";
import { Link } from 'react-scroll';
import ToDo from './ToDo/todo'

function App() {



    const { scrollYProgress } = useScroll();

    const [input, setInput] = useState([]);
    const initialState = [
        { id: 3, name: 'Sleep' },
        { id: 4, name: 'Wake Up' },
    ];
    const [tasks, setTasks] = useState(initialState);

    useEffect(() => {
        const tasks_ret = JSON.parse(localStorage.getItem('tasks'));
        setTasks(tasks_ret);
    }, [])


    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(tasks);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setTasks(tasks => [...tasks, { id: 5, name: input }]);
    }

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




                <div className="form__group field">
                    <input type="input" value={input} onChange={handleChange} className="form__field" placeholder="Task" name="task" id='task' />
                    <button onClick={formSubmit}>Check</button>
                    <label htmlFor="name" className="form__label">Add Task</label>
                </div>

                <div className='todo-container'>


                </div>


            </section>
        </>
    );
}

export default App;
