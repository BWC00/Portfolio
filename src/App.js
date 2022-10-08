import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import { useState } from 'react';


function App() {
	const [darkMode, setDarkMode] = useState(false);
  return (
      <div></div>
      {/*<div className={ darkMode ? 'dark' : ''}>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
         <nav className=' py-10 mb-12 flex justify-between'>
          <h1 className=' text-xl font-burtons'>mohammedshakleya</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl'/></li>
            <li><a className=' bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://www.linkedin.com/in/mohammed-shakleya/">Resume</a></li>
          </ul>
         </nav>
         <div className=' text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Mohammed Shakleya</h2>
          <h3 className='text-2xl py-2 md:text-3xl'>Developer and Thinker</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
          Currently enrolled in a full-time, degree-seeking program and in the process of obtaining a Bachelors degree in Computer Science.
          </p>
         </div>
         <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href="https://www.linkedin.com/in/mohammed-shakleya/"><AiFillTwitterCircle /></a>
          <a href="https://www.linkedin.com/in/mohammed-shakleya/"><AiFillLinkedin /></a>
          <a href="https://www.linkedin.com/in/mohammed-shakleya/"><AiFillYoutube /></a>
         </div>
         <div className='relative mx-auto bg-black bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
      {/*<Image src={deved} layout='fill' objectFit='cover'/> */}
         </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Programming Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
            Obtained these skills through self education and studying at <span className=' text-teal-500'> University of Antwerp </span>
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>These mainly include (advanced level): </p>
          </div>
          <div className='lg:flex gap-10'>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white'>
      {/*<Image src={python} width={100} height={100} /> */}
              <h3 className=' text-lg font-medium pt-8 pb-2'>Python</h3>
              {/* <p className='py-2'>
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className=' text-gray-800 py-1'>photoshop</p>
              <p className=' text-gray-800 py-1'>illustrator</p>
              <p className=' text-gray-800 py-1'>Figma</p> */}
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white'>
      {/*<Image src={ccc} width={100} height={100} /> */}
              <h3 className=' text-lg font-medium pt-8 pb-2'>C++</h3>
              {/* <p className='py-2'>
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className=' text-gray-800 py-1'>photoshop</p>
              <p className=' text-gray-800 py-1'>illustrator</p>
              <p className=' text-gray-800 py-1'>Figma</p> */}
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white'>
      {/*<Image src={javascript} width={100} height={100} /> */}
              <h3 className=' text-lg font-medium pt-8 pb-2'>Javascript</h3>
              {/* <p className='py-2'>
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className=' text-gray-800 py-1'>photoshop</p>
              <p className=' text-gray-800 py-1'>illustrator</p>
              <p className=' text-gray-800 py-1'>Figma</p> */}
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            {/* <p className='text-md py-2 leading-8 text-gray-800'>
            Lorem ipsum dolor sit <span className=' text-teal-500'> amet </span>, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>I offer a lot of services and goods!</p> */}
          </div>
      {/*
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
          </div> */}
        </section>
      </main>
    </div> */}
  );
}

export default App;
