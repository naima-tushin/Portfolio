import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import img from '../../assets/images/Project1.png';
import img2 from '../../assets/images/Project2.png';
import img3 from '../../assets/images/Project3.png';

const projects = [
  {
    title: "Project One",
    description: [
      "Manage pets and roles via user/admin dashboards.",
      "Securely process donations via Stripe integration.",
      "Use WYSIWYG text editors for detailed pet descriptions."
    ],
    link: "https://adopt-me-a12.web.app",
    image: img,
  },
  {
    title: "Project Two",
    description: [
      "Effortlessly add, update, and delete craft items via intuitive interfaces.",
      "Secure login/registration grants access to exclusive features like item management.",
      "Dive into diverse craft subcategories for endless inspiration and discovery."
    ],
    link: "https://artsandcraft-16065.web.app",
    image: img2,
  },
  {
    title: "Project Three",
    description: [
      "Led making a food-sharing website with React, Firebase, Node.js, and MongoDB.",
      "Added features for adding, handling, and asking for food, with private parts just for users.",
      "Made sure signing in and joining were smooth, including using Google or GitHub."
    ],
    link: "https://harvest-hub-client.web.app",
    image: img3,
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-r from-gray-500 via-stone-700 to-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-5xl text-4xl font-extrabold text-white uppercase text-center mb-12">Projects</h2>
        <div className="lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white text-stone-500 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <img src={project.image} alt={project.title} className="rounded-t-lg h-48 w-full lg:object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-stone-500">{project.title}</h3>
                <ul className="text-stone-500 mb-4 list-disc list-inside">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  className="inline-flex items-center bg-gradient-to-r from-gray-500 via-stone-700 to-black text-white py-2 px-4 rounded transition duration-300 uppercase"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
