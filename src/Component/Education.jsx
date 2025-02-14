import React from 'react'

export const Education = () => {
  return (
    <div>
        <section id='education'className="bg-[#0A192F] text-white py-16 px-8 md:px-24">
      <h2 className="text-4xl font-bold text-[#64ffda] text-center mb-12">
        Education
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Education Item 1 */}
        <div className="border-l-4 border-[#64ffda] pl-6">
          <h3 className="text-2xl font-semibold text-[#64ffda]">
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-lg text-gray-300">Your University Name</p>
          <p className="text-gray-400">2023 - 2025</p>
        </div>

        {/* Education Item 2 */}
        <div className="border-l-4 border-[#64ffda] pl-6">
          <h3 className="text-2xl font-semibold text-[#64ffda]">
            Bachelor of Computer Science (Bsc)
          </h3>
          <p className="text-lg text-gray-300">Your College Name</p>
          <p className="text-gray-400">2020 - 2023</p>
        </div>

        {/* Education Item 3 */}
        <div className="border-l-4 border-[#64ffda] pl-6">
          <h3 className="text-2xl font-semibold text-[#64ffda]">
            Higher Secondary Education
          </h3>
          <p className="text-lg text-gray-300">Angel Heart Academy</p>
          <p className="text-gray-400">2016</p>
        </div>
      </div>
    </section>
    </div>
  )
}
