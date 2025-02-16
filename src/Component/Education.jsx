import React from 'react'

export const Education = () => {
  return (
    <div>
        {/* <section id='education'className="bg-[#0A192F] text-white py-16 px-8 md:px-24">
      <h2 className="text-4xl font-bold text-[#64ffda] text-center mb-12">
        Education
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        
        <div className="border-l-4 border-[#64ffda] pl-6">
          <h3 className="text-2xl font-semibold text-[#64ffda]">
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-lg text-gray-300">Your University Name</p>
          <p className="text-gray-400">2023 - 2025</p>
        </div>

        
        <div className="border-l-4 border-[#64ffda] pl-6">
          <h3 className="text-2xl font-semibold text-[#64ffda]">
            Bachelor of Computer Science (Bsc)
          </h3>
          <p className="text-lg text-gray-300">Your College Name</p>
          <p className="text-gray-400">2020 - 2023</p>
        </div>

     
        <div className="border-l-4 border-[#64ffda] pl-6">
          <h3 className="text-2xl font-semibold text-[#64ffda]">
            Higher Secondary Education
          </h3>
          <p className="text-lg text-gray-300">Angel Heart Academy</p>
          <p className="text-gray-400">2016</p>
        </div>
      </div>
    </section> */}
    <section id='education' className="bg-[#0A192F] text-white py-16 px-8 md:px-24">
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
        Education
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Education Card 1 */}
        <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border border-[#64ffda]">
          <h3 className="text-2xl font-semibold text-[#64ffda] mb-2">
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">Sage University indore</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">2023 - 2025</p>
        </div>

        {/* Education Card 2 */}
        <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border border-[#64ffda]">
          <h3 className="text-2xl font-semibold text-[#64ffda] mb-2">
            Bachelor of Computer Science (BSc)
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">Holkar Science College</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">2020 - 2023</p>
        </div>

        {/* Education Card 3 */}
        <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border border-[#64ffda]">
          <h3 className="text-2xl font-semibold text-[#64ffda] mb-2">
            Higher Secondary Education
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">Angel Heart Academy</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">2016</p>
        </div>
      </div>
    </section>
    </div>
  )
}
