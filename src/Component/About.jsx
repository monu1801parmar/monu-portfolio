import React from 'react'

export const About = () => {
  return (
    <>
     <section id="about" className="bg-[#0A192F] text-white py-16 px-8 md:px-24">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm <span className="text-[#64ffda] font-semibold">Monu Parmar</span>, a{" "}
          <span className="text-[#64ffda] font-semibold">Frontend Developer</span> passionate about crafting
          modern and engaging user experiences. I specialize in building responsive and dynamic web applications using{" "}
          <span className="text-[#64ffda]">React.js, Tailwind CSS, and JavaScript</span>.
        </p>

        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Currently pursuing my <span className="text-[#64ffda] font-semibold">Master of Computer Applications (MCA)</span>,
          I am constantly learning and evolving in the field of web development. I enjoy problem-solving and building
          creative solutions that provide seamless user experiences.
        </p>

        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          I thrive in collaborative environments and love taking on new challenges that push my skills further. 
          Let's create something amazing together!
        </p>

        <a
          href="#contact"
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-[#0A192F] bg-[#64ffda] rounded-lg shadow-md transition duration-300 hover:bg-[#52e0c1] hover:-translate-y-1"
        >
          Let's Connect
        </a>
      </div>
    </section>
    </>
  )
}
