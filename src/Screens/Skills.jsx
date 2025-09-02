import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-4 px-4 sm:px-6 lg:px-14 mt-16 w-full max-w-4xl ">
      <div className="w-full">
        <div className="w-full mx-auto px-6 sm:px-6 md:px-12 lg:px-14">
          <h1 className="text-black dark:text-white text-5xl font-bold mb-2 sm:mb-4 text-center">
            Skills<span className="text-violet-500">.</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-8 text-center">
            With knowledge and/or experience
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-4 underline dark:text-white text-black">
                Tools & Technologies
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                <Icon
                  icon="logos:html-5"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:css-3"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:javascript"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:react"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:nodejs"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="simple-icons:gitforwindows"
                  className="text-gray-800 dark:text-white text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="simple-icons:github"
                  className="text-gray-800 dark:text-white text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:tailwindcss-icon"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:bootstrap"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:figma"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:vue"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:canva"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:notion-icon"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:java"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:python"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="material-icon-theme:django"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="streamline-logos:c-language-logo-solid"
                  className="text-2xl sm:text-3xl dark:text-white text-black lg:text-4xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="streamline-logos:c-plus-language-logo-solid"
                  className="text-2xl dark:text-white text-blxl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:php"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:laravel"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:pvewire"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:dart"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:flutter"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="logos:numpy"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:scikitlearn"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:pandas"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="devicon:mysql"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                />
                <Icon
                  icon="simple-icons:phpmyadmin"
                  className="text-xl transition-transform duration-300 transform hover:scale-110 dark:text-white text-black"
                />
                <Icon
                  icon="simple-icons:postman"
                  className="text-xl transition-transform duration-300 transform hover:scale-110 dark:text-white text-black"
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4 underline dark:text-white text-black">
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "Front-end Development",
                  "Web Design",
                  "Responsive Design",
                  "Version Control (Git)",
                  "Machine Learning",
                  "Data Analysis",
                  "Productivity Tools",
                  "UI/UX Design",
                  "Agile Methodologies",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 bg-violet-300/30 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-[10px] font-medium hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4 underline dark:text-white text-black">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "Project Management",
                  "Team Leadership",
                  "Problem Solving",
                  "Communication",
                  "Time Management",
                  "Critical Thinking",
                  "Adaptability",
                  "Collaboration",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 bg-violet-300/30 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-[10px] font-medium hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
