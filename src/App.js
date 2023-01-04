import logo from './public/vercel.svg';
import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BsFacebook, BsLinkedin, BsGithub} from 'react-icons/bs';
import { IconContext } from "react-icons";
import deved from './public/image.jpg'
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
      <div className={ darkMode ? 'dark' : 'bg-paper'}>
      <main className=' px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen mb-10'>
         <nav className=' pt-10 pb-1 mb-12 flex justify-between'>
          <h1 className=' text-xl font-burtons dark:text-cyan-700'>mohammedshakleya</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill color={darkMode ? "gold" : "black"} onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl'/></li>
            <li><a href={cv} download="cv.pdf" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:from-cyan-700 dark:to-teal-700 transform transition-all hover:text-black hover:shadow-black/60 duration-300 shadow-lg shadow-black/40 dark:shadow-cyan-500/30 dark:hover:shadow-cyan-500/50 font-burtons'>Resume</a></li>
          </ul>
         </nav>
         <div className='relative mx-auto mb-10 bg-gray-900 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 shadow-lg shadow-black/60 dark:shadow-black/100'>
           <img src={deved} alt=""/>
         </div>
         <div className=' flex flex-col mb-10 items-center justify-center'>
	  	  <div className=' text-gray-300 bg-gray-900 rounded-xl px-2 transform transition-all hover:-translate-y-1 duration-100 shadow-lg hover:shadow-2xl shadow-black/60 mb-3 w-fit dark:bg-cyan-900 dark:shadow-black/100 border border-gray-700 dark:border-black/20'>
          <h3 className='text-2xl py-0.5 md:text-3xl dark:text-gray-900 hover:text-gray-100 dark:hover:text-black transform transition-all duration-300'>Mohammed Shakleya</h3>
	  	  </div>
	  	  <div className=' text-center bg-gray-200 rounded-xl transform transition-all hover:-translate-y-1 duration-100 shadow-lg hover:shadow-2xl shadow-black/30 dark:shadow-black/100 dark:bg-black/40 border border-gray-100/70 dark:border-black/30'>
          <p className='text-md px-2 py-1 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
          “Be the change that you want to see in the world.”
          </p>
	  	  </div>
         </div>
         <div className=' text-4xl mb-20 flex justify-center gap-16 py-1 text-gray-600 dark:text-gray-700'>
          <a className="bg-[#3b5998]/90 transform transition-all hover:bg-[#3b5998]/100 hover:shadow-black/70 duration-300 rounded-full p-1.5 shadow-lg shadow-black/40 dark:bg-blue-900 dark:hover:bg-blue-800 dark:shadow-black/100 border border-black/10 dark:border-black/60" href="https://www.facebook.com/shakleya/"><BsFacebook style={{color:darkMode ?'gray' : 'white'}} /></a>
          <a className="bg-[#0072B1]/90 transform transition-all hover:bg-[#0072B1]/100 hover:shadow-black/60 duration-300 rounded-xl p-1.5 shadow-lg shadow-black/40 dark:bg-blue-800 dark:hover:bg-blue-700 dark:shadow-black/100 border border-black/10 dark:border-black/60" href="https://www.linkedin.com/in/mohammed-shakleya/"><BsLinkedin style={{color:darkMode ?'gray' : 'white'}} /></a>
          <a className="bg-black/90 transform transition-all hover:bg-black/100 hover:shadow-black/60 duration-300 rounded-full p-1.5 shadow-lg shadow-black/40 dark:bg-black dark:hover:bg-black/10 dark:shadow-black/100 border border-black/10 dark:border-black/60" href="https://github.com/BWC00/"><BsGithub style={{color:darkMode ? 'gray' : 'white'}} /></a>
         </div>
        </section>

        <section>
          <div className='flex flex-col flex-wrap'>
            <h3 className='text-3xl py-1 text-gray-300 bg-gray-900 w-fit px-2 rounded-xl mb-3 transform transition-all hover:-translate-y-1 duration-100 shadow-lg hover:shadow-2xl shadow-black/60 dark:text-gray-900 dark:bg-cyan-900 dark:shadow-black/100 border border-gray-700 dark:border-black/20'>Programming Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800 bg-gray-200 rounded-xl px-2 transform transition-all hover:-translate-y-1 duration-100 shadow-lg hover:shadow-2xl shadow-black/30 mb-2 w-fit dark:shadow-black/100 dark:bg-black/40 dark:text-gray-400 border border-gray-100/70 dark:border-black/30'>
            Obtained these skills through self education and studying at <span className=' text-teal-500'> University of Antwerp </span>
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 bg-gray-200 rounded-xl p-1 transform transition-all hover:-translate-y-1 duration-100 shadow-lg hover:shadow-2xl shadow-black/20 w-fit dark:shadow-black/100 dark:bg-black/40 dark:text-gray-400 border border-gray-100/70 dark:border-black/30'>These mainly include (advanced level): </p>
          </div>
          <div className='lg:flex gap-10'>

            <div className='bg-gray-200 bg-gradient-to-r dark:bg-black dark:from-black dark:via-sky-900/30 dark:to-black/10 text-center p-10 rounded-xl my-10 flex-1 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-black/50 dark:shadow-black/100 border border-gray-100/30 dark:border-black'>
              <img src={python} className='m-auto' width="100" height="100"/>
              <h3 className=' text-lg font-medium pt-8 pb-2 dark:text-gray-600'>Python</h3>
            </div>

            <div className='bg-gray-200 bg-gradient-to-r dark:bg-black dark:from-black dark:via-sky-900/30 dark:to-black text-center p-10 rounded-xl my-10 flex-1 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-black/50 dark:shadow-black/100 border border-gray-100/30 dark:border-black'>
              <img src={c} className='m-auto' width="100" height="100"/>
              <h3 className=' text-lg font-medium pt-8 pb-2 dark:text-gray-600'>C++</h3>
            </div>

            <div className='bg-gray-200 bg-gradient-to-r dark:bg-black dark:from-black dark:via-sky-900/30 dark:to-black text-center p-10 rounded-xl my-10 flex-1 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-black/50 dark:shadow-black/100 border border-gray-100/30 dark:border-black'>
              <img src={javascript} className='m-auto' width="85" height="90"/>
              <h3 className=' text-lg font-medium pt-8 pb-2 dark:text-gray-600'>Javascript</h3>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 text-gray-300 bg-gray-900 w-fit px-2 rounded-xl my-3 transform transition-all hover:-translate-y-1 duration-100 shadow-lg hover:shadow-2xl shadow-black/60 dark:text-gray-900 dark:bg-cyan-900 dark:shadow-black/100 border border-gray-700 dark:border-black/30'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800 bg-gray-200 rounded-xl px-2 transform transition-all hover:-translate-y-1 duration-100 shadow-lg hover:shadow-2xl shadow-black/30 mb-3 w-fit dark:shadow-black/100 dark:bg-black/40 dark:text-gray-400 border border-gray-100/70 dark:border-black/30 dark:text-gray-900'>Some of the projects I've worked on during my journey at university:</p>
          </div>
      
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <a href="https://github.com/Sam-Roggeman/MB-TO-Project" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-black/60 dark:shadow-gray-300/60'>
              <img src={web1} className='rounded-lg object-cover' width="100%" height="100%"/>
              <div className="proj-txtx">
                <h4>Racing game simulator</h4>
                <span>2D Racing game using neural networks</span>
              </div>
            </a>
            <a href="https://github.com/BWC00/Doodle_Jump" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-black/60 dark:shadow-gray-300/60'>
              <img src={doodle_jump} className='rounded-lg object-cover' width="100%" height="100%"/>
              <div className="proj-txtx">
                <h4>Doodle Jump in c++ </h4>
                <span>2D interactive game</span>
              </div>
            </a>
            <a href="https://github.com/BWC00/Music_Recognizer" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-black/60 dark:shadow-blue-900/50'>
              <img src={web3} className=' rounded-lg object-cover' width="100%" height="100%"/>
              <div className="proj-txtx">
                <h4>Music Recognizer</h4>
                <span>Attempts to find the matching songtitle based on a given audio fragment.</span>
              </div>
            </a>
            <a href="https://github.com/William-Steklein/UABA2-PPDB-project" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-black/60 dark:shadow-fuchsia-500/60'>
              <img src={web4} className='rounded-lg object-cover' width="100%" height="100%"/>
              <div className="proj-txtx">
                <h4>Recommendation Simulator and Explorer</h4>
                <span>Web application</span>
              </div>
            </a>
            <a href="https://github.com/BWC00/RBT" className='box box1 shadow-lg basis-1/3 flex-1 proj-imgbx cursor-pointer transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-black/60 dark:shadow-gray-300/60'>
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
