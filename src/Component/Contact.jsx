import React from 'react'

export const Contact = () => {
  return (
    <div>
    {/* <section id="contact" className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-400 mb-8">
          Feel free to reach out to me for any inquiries or collaborations.
        </p>

        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section> */}
    <section id='contactme'className="bg-[#0A192F] text-white py-16 px-8 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form>
          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#64ffda]"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#64ffda]"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#64ffda]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0A192F] text-white text-lg font-semibold py-3 rounded-md hover:bg-[#112240] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

    </div>
  )
}
