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
  const [tasks2, setTasks2] = useState([]);

  const [tasks, setTasks] = useState([
    {
      name: "ES 6",
      completed: false
    },
    {
      name: "Go To Store ",
      completed: false
    },
    {
      name: "1000",
      completed: true
    },
    {
      name: " framework ",
      completed: false
    },
    {
      name: "Buy POTATO",
      completed: false
    }
  ]);

  const [inputValue, setInputValue] = useState('');



  useEffect(() => {
    let myLocalTasks = JSON.parse(window.localStorage.getItem('todos'))
    setTasks2(myLocalTasks)

  }, [])


  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(tasks)

  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      const newTask = {
        task: inputValue,
        completed: false,
      }
      setTasks([...tasks, newTask])
      setInputValue('')
      window.localStorage.setItem('todos', JSON.stringify([tasks]))
    } else {

      console.log('EROR');
    }
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
          <input type="input" value={inputValue} onChange={handleChange} className="form__field" placeholder="Task" name="task" id='task' />
          <button onClick={formSubmit}>Check</button>
          <label htmlFor="name" className="form__label">Add Task</label>
        </div>

        <div className='todo-container'>

          {tasks.map((task, index) => (
            <ToDo key={index} task={task} />
          ))}
        </div>

      </section>
    </>
  );
}

export default App;
