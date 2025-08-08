import React, { useState } from 'react'
import TextType from '../TextAnimations/TextType/TextType';

export const About = () => {
    const [activeTab, setActiveTab] = useState('education');
    const tabs = [
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'awards', label: 'Awards' },
    ];

    const tabContent = {
        education: (
            <div className="md:space-y-1">
                <h3 className=" md:text-sm text-sm lg:text-base font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-400 italic text-2xs md:text-xs lg:text-sm">Pamantasan ng Lungsod ng Maynila</p>
                <span className="text-2xsmd:text-sm text-violet-600 dark:text-violet-400 font-medium">
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
                    <li className="flex items-start text-xs md:text-2xs lg:text-sm">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Assisted in daily reports and weekly meetings under the Asset Protection
                    </li>
                    <li className="flex items-start text-xs md:text-2xs lg:text-sm">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Assisted in the project eKonek which is to scout for router sellers and did the minutes of the meeting during meetings with stakeholders and sellers.
                    </li>
                    <li className="flex items-start text-xs md:text-2xs lg:text-sm">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Assisted in the project eKondisyon which is to create a Risk Assessment for maintaining the pristine physical appearance of the kiosks especially those that are deployed 6 months and older.
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
    <section id="about" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-4 px-4 sm:px-6 lg:px-14 mt-20">
      <div className="w-full mx-auto px-6 sm:px-6 md:px-12 lg:px-14">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              className="w-34 h-56 md:w-64 md:h-80 rounded-lg shadow-lg object-cover object-top mx-auto md:mx-0"
              src="/images/LABAJO ANGELIKA LOUISE-PLM-FILI-0103 (EDITED).JPG"
              alt="Profile"
            />
          </div>

          <div className="flex-1 space-y-3">
            <div className="h-10 md:min-h-[60px] flex items-center justify-center md:justify-start">
              <TextType
                text={["whoami?!", "Angelika Louise", "Lyka", "Likes"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-gray-900 dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold"
              />
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-1 h-24 sm:h-16 md:h-14 lg:h-16 bg-violet-500 rounded-full flex-shrink-0 mt-1"></div>
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 text-[13px] sm:text-2xs md:text-2xs lg:text-sm leading-relaxed">
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
            <a href="LABAJO_CV.pdf" class="bg-indigo-500/95 hover:bg-indigo-400/95 text-white font-medium text-xs md:text-sm py-2 px-4 rounded inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download my CV</span>
                </a>
          </div>
        </div>
      </div>
    </section>
    </>

  )
}
