import logo from './public/vercel.svg';
import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BsFacebook, BsLinkedin, BsGithub} from 'react-icons/bs';
import { IconContext } from "react-icons";
import deved from './public/mo.jpg'
import c from './public/c++.png'
import python from './public/python.png'
import javascript from './public/javascript.png'
import web1 from "./public/gen1.gif";
import web2 from "./public/redblacktree.png";
import web3 from "./public/ap.webp";
import web4 from "./public/web6.png";
import doodle_jump from "./public/doodle_jump.jpeg";
import cv from "./public/cv.pdf";
import { useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={ darkMode ? 'dark' : ''}>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
         <nav className=' py-10 mb-12 flex justify-between'>
          <h1 className=' text-xl font-burtons dark:text-cyan-700'>mohammedshakleya</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill color={darkMode ? "gold" : "black"} onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl'/></li>
            <li><a href={cv} download="cv.pdf" className=' bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:from-cyan-700 dark:to-teal-700'>Resume</a></li>
          </ul>
         </nav>
         <div className=' text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-cyan-700'>Mohammed Shakleya</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-400'>Developer and Thinker</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500'>
          Currently enrolled in a full-time, degree-seeking program and in the process of obtaining a Bachelors degree in Computer Science.
          </p>
         </div>
         <div className=' text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-700'>
          <a href="https://www.facebook.com/shakleya/"><BsFacebook /></a>
          <a href="https://www.linkedin.com/in/mohammed-shakleya/"><BsLinkedin /></a>
          <a href="https://github.com/BWC00/"><BsGithub /></a>
         </div>
         <div className='relative mx-auto bg-black bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
           <img src={deved} alt="" />
         </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-400'>Programming Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-500'>
            Obtained these skills through self education and studying at <span className=' text-teal-500'> University of Antwerp </span>
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-500'>These mainly include (advanced level): </p>
          </div>
          <div className='lg:flex gap-10'>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-900'>
              <img src={python} className='m-auto' width="100" height="100"/>
              <h3 className=' text-lg font-medium pt-8 pb-2 dark:text-gray-500'>Python</h3>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-900'>
              <img src={c} className='m-auto' width="100" height="100"/>
              <h3 className=' text-lg font-medium pt-8 pb-2 dark:text-gray-500'>C++</h3>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-900'>
              <img src={javascript} className='m-auto' width="85" height="90"/>
              <h3 className=' text-lg font-medium pt-8 pb-2 dark:text-gray-500'>Javascript</h3>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-400'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-500'>Some of the projects I've worked on during my journey at university:</p>
          </div>
      
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <a href="https://github.com/Sam-Roggeman/MB-TO-Project" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer'>
              <img src={web1} className='rounded-lg object-cover' width="100%" height="100%"/>
              <div className="proj-txtx">
                <h4>Racing game simulator</h4>
                <span>2D Racing game using neural networks</span>
              </div>
            </a>
            <a href="https://github.com/BWC00/Doodle_Jump" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer'>
              <img src={doodle_jump} className='rounded-lg object-cover' width="100%" height="100%"/>
              <div className="proj-txtx">
                <h4>Doodle Jump in c++ </h4>
                <span>2D interactive game</span>
              </div>
            </a>
            <a href="https://github.com/TsjipTsjip/TAL-TO-Groep" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer'>
              <img src={web3} className=' rounded-lg object-cover' width="100%" height="100%"/>
              <div className="proj-txtx">
                <h4>Music Recognizer</h4>
                <span>Attempts to find the matching songtitle based on a given audio fragment.</span>
              </div>
            </a>
            <a href="https://github.com/William-Steklein/UABA2-PPDB-project" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer'>
              <img src={web4} className='rounded-lg object-cover' width="100%" height="100%"/>
              <div className="proj-txtx">
                <h4>Recommendation Simulator and Explorer</h4>
                <span>Web application</span>
              </div>
            </a>
            <a href="https://github.com/RobbeNooyens/gas-toepassingsopdracht/blob/master/Eindversie/Implementaties/Datastructuren/MohammedRBT.py" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer'>
              <img src={web2} className='rounded-lg object-cover' width="100%" height="100%"/>
              <div className="proj-txtx">
                <h4>Red Black Tree</h4>
                <span>Implementation of a red black tree</span>
              </div>
            </a>
            <div className='basis-1/3 flex-1'>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
