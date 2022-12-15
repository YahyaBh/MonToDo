import './App.css';
import { useEffect, useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListPlus } from 'react-icons/bi';
import { AiFillStar, AiFillHome } from 'react-icons/ai';
import { motion, useScroll } from "framer-motion";
import { Link } from 'react-scroll';


function App() {



  const { scrollYProgress } = useScroll();

  const [items, setItems] = useState([{name : 'getting' , data : 'setting'} , {name : 'getting' , data : 'setting'}]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getTasks();

  }, []);


  const getTasks = () => {


    var courses = JSON.parse(localStorage.getItem('tasks'));
    setItems(courses);
  }

  const SaveTask = () => {
    if (input.length !== 0) {
      const date = new Date();

      var courses = JSON.parse(localStorage.getItem('tasks') || '[]');
      var course = {
        Name: input,
        Data: date
      };

      courses.push(course);

      localStorage.setItem('tasks', JSON.stringify(courses));
      window.location.reload(false);
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
          <input value={input} onChange={(e) => setInput(e.target.value)} type="input" className="form__field" placeholder="Task" name="task" id='task' />
          <button onClick={SaveTask}>Check</button>
          <label htmlFor="name" className="form__label">Add Task</label>
        </div>


        {
          items.map(userInfo => {
            return <h1>Task Name : {userInfo.Name} - At {userInfo.Data}</h1>
          })
        }

      </section>
    </>
  );
}

export default App;
