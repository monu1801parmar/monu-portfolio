import React from 'react'

export const Footer = () => {
  return (
    <div>
        
{/* 
<footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer> */}
   <footer className="bg-[#0A192F] text-white py-6 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-lg font-semibold">Monu Parmar</p>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mt-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] text-lg font-medium hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] text-lg font-medium hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] text-lg font-medium hover:underline"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>

    </div>
  )
}
