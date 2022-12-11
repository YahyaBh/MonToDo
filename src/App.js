import './App.css';
import { FaClipboardList } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListPlus } from 'react-icons/bi';
import { AiFillStar, AiFillHome } from 'react-icons/ai';
import { motion, useViewportScroll, useTransform } from "framer-motion";


function App() {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <>
      <header>

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
            <li><a href="#home">HOME <AiFillHome /></a></li>
            <li><a href="#news">TASKS <BsCardChecklist /></a></li>
            <li><a href="#contact">STARED  <AiFillStar /></a></li>
            <li><a href="#contact">CREATE  <BiListPlus /></a></li>
          </ul>
        </nav>

        <div className='header-container'>
          <div className='header-texts'>
            <h1>Make Your Time <b>Organized</b></h1>
            <p>Make each task with it specific time , to make your life a lot easier <br/>and make your time much meanful</p>
          </div>
          <div className='task-box'></div>
        </div>

      </header>

      <section>
        
      </section>
    </>
  );
}

export default App;
