import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ASCII System, Chittagong, Bangladesh",
      duration: "July 2023 - October 2023",
      responsibilities: [
        "Developed responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap.",
        "Collaborated with a team to implement designs and ensure responsive web design.",
        "Optimized website performance and accessibility.",
      ],
    },
  ];

  return (
    <section className="lg:py-12 py-6 px-4 lg:w-[85%] mx-auto" id="experience">
      <h2 className="lg:text-5xl text-4xl font-extrabold lg:mb-8 mb-6 text-center text-stone-500 uppercase">Experience</h2>
      <TransitionGroup className="flex flex-col items-center">
        {experiences.map((exp, index) => (
          <CSSTransition
            key={index}
            timeout={500}
            classNames="fade"
          >
            <div className="w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-gray-500 via-stone-700 to-black shadow-lg rounded-lg p-6 mb-8 transition-transform transform hover:-translate-y-2 duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-2 text-white">{exp.role}</h3>
              <p className="text-white mb-1">{exp.company}</p>
              <p className="text-white mb-4 italic">{exp.duration}</p>
              <ul className="list-disc list-inside mb-4">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="mb-1 text-white">{item}</li>
                ))}
              </ul>
              <a href="https://naima-tushin.github.io/StrongBong" target="_blank" rel="noopener noreferrer" className="text-black bg-white hover:bg-black hover:text-white font-bold border border-black rounded p-2 uppercase items-center justify-center text-center flex">Visit Strong Bong</a>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};

export default Experience;
