import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <FaHtml5 className="text-orange-500 text-4xl" />
            <p className="mt-2 text-lg font-semibold">HTML</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <FaCss3Alt className="text-blue-500 text-4xl" />
            <p className="mt-2 text-lg font-semibold">CSS</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <FaJs className="text-yellow-500 text-4xl" />
            <p className="mt-2 text-lg font-semibold">JavaScript</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <FaReact className="text-blue-400 text-4xl" />
            <p className="mt-2 text-lg font-semibold">React.js</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <FaNodeJs className="text-green-500 text-4xl" />
            <p className="mt-2 text-lg font-semibold">Node.js</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <SiExpress className="text-gray-400 text-4xl" />
            <p className="mt-2 text-lg font-semibold">Express.js</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <SiMongodb className="text-green-700 text-4xl" />
            <p className="mt-2 text-lg font-semibold">MongoDB</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <SiTailwindcss className="text-teal-400 text-4xl" />
            <p className="mt-2 text-lg font-semibold">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <FaDatabase className="text-gray-500 text-4xl" />
            <p className="mt-2 text-lg font-semibold">Database</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
