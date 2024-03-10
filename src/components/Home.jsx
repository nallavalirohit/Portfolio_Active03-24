import React from "react";
import HeroImage from '../assets/heroImage.png'
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
    return (
        <div name="home" className="w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="spacer w-full">&#160;</div>
            <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row max-sm:grid-cols-1 sm:gap-y-6">
                <div className="flex flex-col justify-center text-center md:text-left md:w-1/2 sm:flex-col">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white">
                        I'm a <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Front-End Developer</span>
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
                        I have 6+ years of experience building software applications.
                        Currently, I love creating interactive web applications using technologies like Angular, React, Tailwind, and GraphQL.
                    </p>

                    <div>
                        <a href="/Resume.docx" download className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Resume 
                            <span className="group-hover:rotate-90 duration-500"><RiArrowRightSLine size={25} className="ml-1"/></span>
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src={HeroImage} alt="profile pic" className="rounded-2xl mx-auto w-full md:max-w-md lg:max-w-lg xl:max-w-xl mb-5"/>
                </div>
            </div>
        </div>
    )
}

export default Home;
