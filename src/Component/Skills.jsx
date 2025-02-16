import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export const Skills = () => {
  return (
    <>
    <section id="skills" className="bg-[#0A192F] text-white py-16 px-8 md:px-24">
  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-white text-center mb-12">Skills</h2>
  <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
    <div className="flex flex-col items-center bg-gray-800 w-48 px-8 py-6 text-lg font-medium rounded-md">
      <FaReact className="text-[#61DBFB] text-4xl mb-2" />
      React.js
    </div>
    <div className="flex flex-col items-center bg-gray-800 w-48 px-8 py-6 text-lg font-medium rounded-md">
      <FaHtml5 className="text-[#E44D26] text-4xl mb-2" />
      HTML5
    </div>
    <div className="flex flex-col items-center bg-gray-800 w-48 px-8 py-6 text-lg font-medium rounded-md">
      <FaCss3Alt className="text-[#264de4] text-4xl mb-2" />
      CSS3
    </div>
    <div className="flex flex-col items-center bg-gray-800 w-48 px-8 py-6 text-lg font-medium rounded-md">
      <FaJs className="text-[#F7DF1E] text-4xl mb-2" />
      JavaScript
    </div>
    <div className="flex flex-col items-center bg-gray-800 w-48 px-8 py-6 text-lg font-medium rounded-md">
      <FaNodeJs className="text-[#68A063] text-4xl mb-2" />
      Node.js
    </div>
    <div className="flex flex-col items-center bg-gray-800 w-48 px-8 py-6 text-lg font-medium rounded-md">
      <SiMongodb className="text-[#4DB33D] text-4xl mb-2" />
      MongoDB
    </div>
    <div className="flex flex-col items-center bg-gray-800 w-48 px-8 py-6 text-lg font-medium rounded-md">
      <FaGitAlt className="text-[#F34F29] text-4xl mb-2" />
      Git
    </div>
  </div>
</section>
    </>
    
  );
};
