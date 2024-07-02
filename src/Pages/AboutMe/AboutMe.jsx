import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 lg:py-10 py-5">
      <h1 className="lg:text-5xl text-4xl text-center font-extrabold text-stone-500 lg:mb-10 mb-5 uppercase">About Me</h1>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <div className="lg:text-center md:text-left">
              <h2 className="lg:text-4xl text-2xl font-extrabold text-gray-800 leading-tight lg:mb-4 mb-2">Hi, I'm Naima Akther Tushin</h2>
              <p className="text-xl text-gray-700 leading-relaxed lg:mb-6 mb-3">Passionate about Web Development</p>
              <p className="text-lg text-gray-700 leading-relaxed lg:mb-6 mb-3">
                I'm a versatile front-end developer with full-stack proficiency, holding a BSc in Computer Science and Engineering. Recently trained in web development through Programming Hero, I've mastered technologies like the MERN stack, Next.js, Tailwind CSS, RESTful APIs and more, all of which are detailed in the skills section of my portfolio website.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              During an internship at ASCII System, I co-developed the Strong Bong gym website, refining my skills and gaining practical experience. Passionate about creating intuitive web applications, I thrive in dynamic, collaborative environments and am eager to contribute to impactful projects.
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
