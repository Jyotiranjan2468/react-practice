import React from 'react';
import HeroImage from"../image/bg3.jpg";
import {MdKeyboardArrowRight} from"react-icons/md";
const Home = () => {
  return (
    <div 
    name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
    >
      <div className="max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h1>
            <p className="text-gray-500 py-4 max-w-md">
                I have 1 year of experiance building and desgining software.
                Currently, I love to work on web application using technologies like
                React,Tailwind,Next JS and java.
            </p>
            <div>
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    portfolio
                    <span className="group-hover:rotate-90 duration-300">
                        <MdKeyboardArrowRight size={25} className="ml-1"/>
                    </span>
                </button>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto  my-auto w-1/2 md:w-50"  />
        </div>
      </div>
    </div>
  )
}

export default Home
