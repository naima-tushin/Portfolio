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
    <section className="py-12 px-4 w-[85%] mx-auto">
      <h2 className="text-5xl font-extrabold mb-8 text-center text-stone-500">Experience</h2>
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
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="mb-1 text-white">{item}</li>
                ))}
              </ul>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};

export default Experience;
