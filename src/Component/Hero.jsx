import React from 'react'

export const Hero = () => {
  return (
    <>
{/*    
   <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-24 py-20 bg-[#0A192F] text-white min-h-screen">
      
      <div className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-gray-500 shadow-2xl">
        <img
          src="monupic.jpg"  
          alt="Monu Parmar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-8 md:mt-0 md:ml-16 text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 text-[#64ffda]">
          Hi, I'm Monu Parmar
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I am a passionate <span className="text-[#64ffda]">Frontend Developer</span> skilled in building 
          modern and responsive web applications. With expertise in 
          <span className="text-[#64ffda]"> React.js </span> and 
          <span className="text-[#64ffda]"> Tailwind CSS</span>, I create visually appealing and 
          user-friendly interfaces. I love solving problems and bringing creative 
          ideas to life through code.
        </p>
      </div>
    </section> */}
  <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-16 bg-[#0A192F] text-white min-h-screen"> 

<div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-gray-500 shadow-2xl"> 
  <img 
    src="monupic.jpg" 
    alt="Monu Parmar" 
    className="w-full h-full object-cover" 
  /> 
</div> 

<div className="mt-16 md:mt-0 md:ml-24 text-center md:text-left max-w-xl flex flex-col justify-center"> 
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#64ffda]"> 
    Hi, I'm Monu Parmar 
  </h1> 
  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"> 
    I am a passionate <span className="text-[#64ffda]">Frontend Developer</span> skilled in building 
    modern and responsive web applications. With expertise in 
    <span className="text-[#64ffda]"> React.js </span> and 
    <span className="text-[#64ffda]"> Tailwind CSS</span>, I create visually appealing and 
    user-friendly interfaces. I love solving problems and bringing creative 
    ideas to life through code. 
  </p> 
</div> 

</section>


    </>
  )
}
