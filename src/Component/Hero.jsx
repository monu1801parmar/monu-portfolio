import React from 'react'

export const Hero = () => {
  return (
    <>
    <div className=" h-screen bg-gray-900 dark:bg-gray-200"> 
    <div
        className="h-full w-full mx-auto relative top-12 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pb-10 pt-4">
        <div className="w-full relative">
            {/* <img className="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto" src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg" alt="My Image" /> */}
            <img className="relative z-10 rounded-full w-80 mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30" src="monupic.jpg" alt="My Image" />
        </div>
        <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">Hello, My name is Monu Parmar</h1>
            <h3 className="capitalize text-rose-400">i'm <span className="typing text-green-500 dark:text-green-700">Frontend developer</span></h3>
            <p>skilled in building 
            modern and responsive web applications. With expertise in React.js and Tailwind CSS ,I create visually appealing and 
          user-friendly interfaces. I love solving problems and bringing creative 
          ideas to life through code.</p>
            <div className="sm:mt-4 mt-2">
                <button className="px-6 py-1 bg-rose-500 text-white rounded-sm">Get In Touch</button>
            </div>
        </div>
    </div>
</div>

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js" referrerpolicy="no-referrer"></script> */}
{/* <script>
    var typed = new Typed('.typing', {
    strings:['', 'FullStack Developer,', 'Frontend Developer,', 'Backend Developer,', 'Mobile Apps Developer.'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
</script> */}
{/* <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-24 py-20 bg-[#0A192F] text-white min-h-[80vh]">
      
      <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg">
        <img
          src="monupic.jpg"  
          alt="Monu Parmar"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-5 text-[#64ffda]">
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

    </>
  )
}
