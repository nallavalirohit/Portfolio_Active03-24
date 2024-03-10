import React from "react";

const About = () => {
  return (
    <div
    name="about" 
      className="w-full bg-gradient-to-b from-gray-800 via-black to-black text-white"
    >
      <div className="spacer w-full">&#160;</div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full pb-24">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Coding enthusiast passionate about crafting seamless user experiences.
          With an eye for detail and 5+ years of front-end development
          expertise, I specialize in creating dynamic, responsive interfaces
          using cutting-edge technologies like React and Angular. Collaborative
          by nature, I thrive in team environments, combining creativity with
          technical prowess to bring designs to life. Continuously exploring new
          tools and trends, I'm committed to delivering pixel-perfect,
          accessible solutions that exceed expectations. Let's collaborate and
          turn ideas into beautifully functional realities.
        </p>
      </div>
    </div>
  );
};

export default About;
