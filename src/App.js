import './App.css';
import { useEffect, useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListPlus } from 'react-icons/bi';
import { AiFillStar, AiFillHome } from 'react-icons/ai';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from 'react-scroll';


function App() {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const [items, setItems] = useState(['hello' , 'weclome']);
  const [taskInput, setTaskInput] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
      console.log(items);
    }
  }, []);


  function SaveTask() {
    if (taskInput.length !== 0) {
      setItems(taskInput);
      localStorage.setItem('items', JSON.stringify(items));
      setTaskInput('');
    }
    // else {
    //   alert('Can not be empty !')
    // }

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
        {items.length === 0 ? 'Data Not Saved' :
          items.map((item, index) => (
            <h3 key={index}>{item}</h3>
          ))}




        <input name='task' onChange={e => setTaskInput(e.target.value)} />

        <button onClick={SaveTask()}>Check</button>

      </section>
    </>
  );
}

export default App;
