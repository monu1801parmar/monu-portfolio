import React from 'react'

export const Contact = () => {
  return (
    <>
<section id='contactme' className="bg-[#0A192F] text-white py-16 px-6 md:px-16">
  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">Contact Me</h2>

  <div className="max-w-xl mx-auto bg-[#112240] p-6 rounded-lg shadow-lg">
    <form>
      {/* Name Field */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-[#64ffda] mb-2">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 bg-[#0A192F] text-white border border-[#64ffda] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
        />
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-[#64ffda] mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 bg-[#0A192F] text-white border border-[#64ffda] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
        />
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-[#64ffda] mb-2">Message</label>
        <textarea
          rows="4"
          placeholder="Write your message..."
          className="w-full p-3 bg-[#0A192F] text-white border border-[#64ffda] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#64ffda] text-[#0A192F] text-lg font-semibold py-3 rounded-md hover:bg-[#52e0c4] transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
    </>
  )
}
