import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-10">
        <h1 className="text-5xl text-center font-extrabold text-stone-500 mb-10 uppercase">About Me</h1>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">Hi, I'm Naima Akther Tushin</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">Passionate about Web Development</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I recently completed a six-month course on Programming Hero, where I specialized in Web Development. 
                Through this program, I gained hands-on experience in building projects using the MERN stack, and I am eager to apply my skills in real-world scenarios.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Currently, I am diving deeper into React to enhance my ability to build scalable and high-performance applications.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-gradient-to-r from-gray-500 via-stone-700 to-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Me?</h3>
              <ul className="text-lg text-gray-200 leading-relaxed">
                <li className="mb-2">Passionate about innovation and problem-solving</li>
                <li className="mb-2">Strong communicator and team player</li>
                <li className="mb-2">Eager to learn and grow with expertise in React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
