import React from 'react';
import { motion } from 'framer-motion';
import { FaJsSquare, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGithub, FaChrome } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiNetlify, SiVercel, SiBootstrap } from 'react-icons/si';

const technicalSkills = [
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-purple-500" /> },
  { name: 'Chrome Dev Tools', icon: <FaChrome className="text-green-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-blue-600" /> },
  { name: 'Vercel CLI', icon: <SiVercel className="text-gray-800" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
];

const softSkills = [
  { name: 'Hardworking', icon: '🏋️‍♂️' },
  { name: 'Active Listening', icon: '👂' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Management', icon: '📊' },
  { name: 'Adaptability', icon: '🌍' },
];

const Skills = () => {
  return (
    <section className="lg:py-12 py-6 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="lg:text-5xl text-4xl uppercase font-extrabold text-stone-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>

        {/* Technical Skills Section */}
        <div className="lg:mt-8 mt-4">
          <motion.h3 
            className="mb-8 p-4 text-3xl font-semibold bg-gradient-to-r from-gray-500 via-stone-700 to-black text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-8">
          <motion.h3 
            className="mb-8 p-4 text-3xl font-semibold bg-gradient-to-r from-gray-500 via-stone-700 to-black text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Soft Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => (
  <motion.div
    className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4"
    whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
    transition={{ type: 'spring', stiffness: 300, duration: 0.8 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="text-4xl">
      {typeof skill.icon === 'string' ? <span>{skill.icon}</span> : <span className="text-4xl">{skill.icon}</span>}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
    </div>
  </motion.div>
);

export default Skills;
