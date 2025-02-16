import React from 'react';
import Portfolio_image from '../assets/Portfolio.png'
import Bookstore_image from '../assets/HomeSs.png'


export const Projects = () => {
  return (
  <>
   <section id="projects" className="bg-[#0A192F] text-white py-16 px-8">
      <h2 className="ttext-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        
        {/* Portfolio Website */}
        <div className="bg-[#112240] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-3">
          <img
            src={Portfolio_image}
            alt="Portfolio Website"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#64ffda] mb-4">
              Portfolio Website
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
              A personal portfolio website showcasing my projects, skills, and
              experience with a modern and responsive design.
            </p>
            <a
              href="#"
              className="inline-block text-[#64ffda] border border-[#64ffda] rounded-lg px-4 py-2 text-sm font-medium transition duration-300 hover:bg-[#64ffda] hover:text-[#0A192F]"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Bookstore Project */}
        <div className="bg-[#112240] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-3">
          <img
            src={Bookstore_image}
            alt="Bookstore Project"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#64ffda] mb-4">
              Bookstore Project
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
              An online bookstore where users can browse, add books to the cart,
              and purchase books securely.
            </p>
            <a
              href="#"
              className="inline-block text-[#64ffda] border border-[#64ffda] rounded-lg px-4 py-2 text-sm font-medium transition duration-300 hover:bg-[#64ffda] hover:text-[#0A192F]"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Tech Blog */}
        <div className="bg-[#112240] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-3">
          <img
            src="/docs/images/blog/image-1.jpg"
            alt="Tech Blog"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#64ffda] mb-4">
              Tech Blog
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
              A blog website covering the latest tech trends and updates with a
              sleek, user-friendly interface.
            </p>
            <a
              href="#"
              className="inline-block text-[#64ffda] border border-[#64ffda] rounded-lg px-4 py-2 text-sm font-medium transition duration-300 hover:bg-[#64ffda] hover:text-[#0A192F]"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
