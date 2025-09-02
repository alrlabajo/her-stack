import React from 'react'
import { useState } from 'react';
import TextType from '../TextAnimations/TextType/TextType';

const About = () => {

    const [activeTab, setActiveTab] = useState('education');
    const tabs = [
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'awards', label: 'Awards' },
    ];

    const tabContent = {
        education: (
            <div className="md:space-y-1">
                <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-400 italic text-xs md:text-xs lg:text-sm">Pamantasan ng Lungsod ng Maynila</p>
                <span className="text-xs sm:text-sm md:text-xs text-violet-600 dark:text-violet-400 font-medium">
                    2021 - 2025
                </span>
            </div>
        ),
        experience: (
            <div className="space-y-1">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <h3 className="text-sm md:text-sm lg:text-base font-semibold text-gray-900 dark:text-white md:h-4">
                        Project Management Intern
                    </h3>
                    <span className="text-xs md:text-xs lg:text-sm text-violet-600 dark:text-violet-400 font-medium">
                        July 2024 - August 2024
                    </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-xs md:text-sm">eTap Solutions Inc.</p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start text-[10px] md:text-xs lg:text-sm">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Assisted in daily reports and weekly meetings under the Asset Protection
                    </li>
                    <li className="flex items-start text-[10px] md:text-xs lg:text-sm">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Assisted in the project eKonek and eKondisyon which are the ongoing projects during my internship.
                    </li>
                </ul>
            </div>
        ),
        awards: (
            <div className="md:space-y-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <h3 className="text-sm md:text-sm lg:text-lg font-semibold text-gray-900 dark:text-white md:h-4">
                        Best Paper
                    </h3>
                    <span className="text-[10px] md:text-sm lg:text-sm text-violet-600 dark:text-violet-400 font-medium">
                        February 6-7, 2025
                    </span>
                </div>

              <p className="text-gray-600 dark:text-gray-400 italic text-[10px] md:text-xs lg:text-sm">
                  2025 National Arts and Sciences Research Congress (NASERCON)
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[9px] md:text-2xs lg:text-sm">
                Our paper entitled <strong>"Enhancement of Generalized Mean Distance K-Nearest Neighbor Algorithm in detecting Filipino Phishing Short Messaging System applied in Mobile Application"</strong> was presented and awarded as the <span className="text-violet-600 dark:text-violet-400 font-semibold">Best Paper</span> under the category of Technology, Innovation, and Society.
              </p>
            </div>
        )
    };

  return (
    <>
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-4 px-4 sm:px-6 lg:px-14 mt-20 w-full max-w-4xl ">
      <div className="w-full">
        <div className="flex flex-row gap-8 lg:gap-12 items-center md:items-start">
          <div className="flex-1 space-y-3">
            <div className="h-10 md:min-h-[60px] flex items-center">
              <h1
                className="text-gray-900 dark:text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-4 md:mb-4"
              >
                Angelika Louise<span className="text-violet-500">.</span>
              </h1>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 text-[13px] leading-relaxed">
                  By combining design thinking, front-end development, and project management, it is my goal to build digital experiences that are not only functional and user-friendly, but also delivered efficiently and on time.
                  <span className='text-violet-500 font-semibold'> PS. I like purple.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap border-b border-gray-300 dark:border-gray-600 text-xs md:text-sm">
                {tabs.map((tab) => (
                    <button
                    key={tab.id}
                    className={`py-2 px-4 focus:outline-none transition-colors duration-200 relative ${
                        activeTab === tab.id
                        ? 'border-b-2 border-violet-500 text-violet-500 font-semibold -mb-px'
                        : 'text-gray-600 dark:text-gray-400 hover:text-violet-500'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    >
                    {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default About
