import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">Hi, I'm Naima Akther Tushin</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">Passionate about Web Development</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I specialize in Web Development with a keen interest in MERN Stack. 
                With 2 years of experience, I've worked on projects ranging from 
                e-commerce platforms to social media applications, always striving to create efficient and user-friendly solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Outside of work, I enjoy hiking and photography. Currently diving deeper into React and Node.js to build scalable and high-performance applications.
              </p>
              <div className="flex justify-center md:justify-start">
                <a href="/resume.pdf" target="_blank" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">Download Resume</a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Me?</h3>
              <ul className="text-lg text-gray-200 leading-relaxed">
                <li className="mb-2">Proven track record in MERN Stack Development</li>
                <li className="mb-2">Passionate about innovation and problem-solving</li>
                <li className="mb-2">Strong communicator and team player</li>
                <li className="mb-2">Continuous learner with expertise in React and Node.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
