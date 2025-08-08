import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const Contact = () => {
  return (
    <>
    <section id="contact" className="min-h-[calc(100vh-60px)] flex items-center justify-center py-4 px-4 sm:px-6 lg:px-14 mt-20">
      <div className="w-full mx-auto px-6 sm:px-6 md:px-12 lg:px-14 flex flex-col sm:flex-col md:flex-row lg:flex-row">
        <div className="w-full mx-auto space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-left dark:text-white text-gray-900">
              Let's<br/>build<br/>something<br/>amazing!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs md:text-base">Feel free to reach out for collaboration,<br/>inquiries, or just to say hello!</p>
          <div className="flex flex-row gap-x-4 items-center">
            <a
              href="mailto:alrlabajo@gmail.com"
              className="text-violet-500 text-[35px] hover:text-violet-300 cursor-pointer transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="ic:round-email" />
            </a>
            <a
              href="https://facebook.com/chkkngs"
              className="text-violet-500 text-3xl hover:text-violet-300 cursor-pointer transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="entypo-social:facebook-with-circle" />
            </a>
            <a
              href="https://instagram.com/likelabajo"
              className="text-violet-500 text-3xl hover:text-violet-300 cursor-pointer transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="entypo-social:instagram-with-circle" />
            </a>
            <a
              href="https://linkedin.com/in/likeslabajo"
              className="text-violet-500 text-3xl hover:text-violet-300 cursor-pointer transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="entypo-social:linkedin-with-circle" />
            </a>
          </div>
        </div>

        <div className="w-full">
          <form action="https://api.web3forms.com/submit" className="w-full mx-auto" method="POST">
              <input type="hidden" name="access_key" value="01f01ce9-b30a-4334-aa15-d036a0423345" />
              <div className="mb-2">
                  <label htmlFor="name" className="block mb-2 text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="Name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-xs md:text-sm lg:text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="Your name" required />
              </div>
              <div className="mb-2">
                  <label htmlFor="email" className="block mb-2 text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" name="Email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-xs md:text-sm lg:text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="email@example.com" required />
              </div>
              <div className="mb-2">
                  <label htmlFor="message" className="block mb-2 text-xs sm:text-xs md:text-sm lg:text-smfont-medium text-gray-900 dark:text-white">Message</label>
                  <textarea name="Message" rows="4" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-xs md:text-sm lg:text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="Your message" required></textarea>
              </div>
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <button type="submit" className="w-full text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-xs sm:text-xs md:text-sm lg:text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 transition-colors duration-200">Send Message</button>
            </form>
        </div>
      </div>
    </section>

    </>
  )
}
