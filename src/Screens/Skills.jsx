import React from 'react'
import { Icon } from '@iconify/react'

export const Skills = () => {
  return (
    <>
     <section id="skills" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-4 px-4 sm:px-6 lg:px-14 mt-20">
      <div className="w-full mx-auto px-6 sm:px-6 md:px-12 lg:px-14">
        <h1 className="text-black dark:text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
          Skills<span className="text-violet-500">.</span>
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div >
              <h2 className="text-lg font-semibold mb-4 underline dark:text-white text-black">Tools & Technologies</h2>
              <div className='flex flex-wrap gap-2 sm:gap-3 items-center'>
              <Icon icon="logos:html-5" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="logos:css-3" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="logos:javascript" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="logos:react" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:nodejs" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="simple-icons:gitforwindows" className='text-gray-800 dark:text-white text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="simple-icons:github" className="text-gray-800 dark:text-white text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110" />
              <Icon icon="logos:tailwindcss-icon" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="logos:bootstrap" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="logos:figma" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="logos:vue" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:canva" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="logos:notion-icon" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:java" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:python" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="material-icon-theme:django" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="streamline-logos:c-language-logo-solid" className='text-2xl sm:text-3xl dark:text-white text-black lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="streamline-logos:c-plus-language-logo-solid" className='text-2xl dark:text-white text-black sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:php" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:laravel" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:pvewire" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:dart" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="logos:flutter" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="logos:numpy" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:scikitlearn" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:pandas" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="devicon:mysql" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110'/>
              <Icon icon="simple-icons:phpmyadmin" className='text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110 dark:text-white text-black'/>
            </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4 underline dark:text-white text-black">Technical Skills</h2>
              <div className='flex flex-wrap gap-1.5 sm:gap-2'>
              {[
                'Front-end Development',
                'Web Design',
                'Responsive Design',
                'Version Control (Git)',
                'Machine Learning',
                'Data Analysis',
                'Productivity Tools',
                'UI/UX Design',
                'Agile Methodologies',
              ].map((skill, index) => (
                <span
                  key={index}
                  className='px-2 py-1 sm:px-3 sm:py-1.5 bg-violet-300/30 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs sm:text-2xs md:text-sm lg:text-sm  font-medium hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors duration-200'
                >
                  {skill}
                </span>
              ))}
            </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4 underline dark:text-white text-black">Soft Skills</h2>
              <div className='flex flex-wrap gap-1.5 sm:gap-2'>
              {[
                'Project Management',
                'Team Leadership',
                'Problem Solving',
                'Communication',
                'Time Management',
                'Critical Thinking',
                'Adaptability',
                'Collaboration',
              ].map((skill, index) => (
                <span
                  key={index}
                  className='px-2 py-1 sm:px-3 sm:py-1.5 bg-violet-300/30 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs sm:text-2xs md:text-sm lg:text-sm  font-medium hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors duration-200'
                >
                  {skill}
                </span>
              ))}
            </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}
