import React from 'react';
import { FaJsSquare, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGithub, FaChrome } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiNetlify, SiVercel } from 'react-icons/si';

const technicalSkills = [
  { name: 'JavaScript', level: 'Advanced', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'React', level: 'Advanced', icon: <FaReact className="text-blue-500" /> },
  { name: 'Tailwind CSS', level: 'Expert', icon: <SiTailwindcss className="text-teal-500" /> },
  { name: 'Node.js', level: 'Intermediate', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', level: 'Intermediate', icon: <SiExpress className="text-gray-500" /> },
  { name: 'MongoDB', level: 'Intermediate', icon: <SiMongodb className="text-green-500" /> },
  { name: 'HTML', level: 'Expert', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', level: 'Expert', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'GitHub', level: 'Advanced', icon: <FaGithub className="text-purple-500" /> },
  { name: 'Chrome Dev Tools', level: 'Advanced', icon: <FaChrome className="text-green-600" /> },
  { name: 'Firebase', level: 'Advanced', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Netlify', level: 'Advanced', icon: <SiNetlify className="text-blue-600" /> },
  { name: 'Vercel CLI', level: 'Advanced', icon: <SiVercel className="text-gray-800" /> },
];

const softSkills = [
  { name: 'Hardworking', level: 'Expert', icon: '🏋️‍♂️' },
  { name: 'Active Listening', level: 'Advanced', icon: '👂' },
  { name: 'Teamwork', level: 'Expert', icon: '🤝' },
  { name: 'Management', level: 'Advanced', icon: '📊' },
  { name: 'Adaptability', level: 'Advanced', icon: '🌍' },
];

const Skills = () => {
  return (
    <section className="lg:py-12 py-6 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="lg:text-5xl text-4xl uppercase font-extrabold text-stone-500 text-center">Skills</h2>

        {/* Technical Skills Section */}
        <div className="lg:mt-8 mt-4">
          <h3 className="mb-8 p-4 text-3xl font-semibold bg-gradient-to-r from-gray-500 via-stone-700 to-black text-white text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-8">
          <h3 className="mb-8 p-4 text-3xl font-semibold bg-gradient-to-r from-gray-500 via-stone-700 to-black text-white text-center">Soft Skills</h3>
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
  <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
    <div className="text-4xl">
      {typeof skill.icon === 'string' ? <span>{skill.icon}</span> : <span className="text-4xl">{skill.icon}</span>}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div className={`h-2.5 rounded-full ${getProgressBarColor(skill.level)}`} style={{ width: getProgressWidth(skill.level) }}></div>
      </div>
    </div>
  </div>
);

const getProgressWidth = (level) => {
  switch (level) {
    case 'Expert':
      return '100%';
    case 'Advanced':
      return '75%';
    case 'Intermediate':
      return '50%';
    case 'Beginner':
      return '25%';
    default:
      return '0%';
  }
};

const getProgressBarColor = (level) => {
  switch (level) {
    case 'Expert':
      return 'bg-green-500';
    case 'Advanced':
      return 'bg-blue-500';
    case 'Intermediate':
      return 'bg-yellow-500';
    case 'Beginner':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export default Skills;
