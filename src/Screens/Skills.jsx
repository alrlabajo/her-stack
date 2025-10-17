import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center w-full max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-14">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center my-8 gap-4 sm:gap-6 lg:gap-10">
          <h1 className="text-6xl lg:text-8xl font-semibold leading-none">
            Skills<span className="text-violet-500">.</span>
          </h1>
          <p className="text-xs leading-relaxed lg:mt-12 max-w-2xl">
            These are some of the tools, technologies, and skills I've acquired and honed over time
            through various projects, coursework, and experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h2 className="text-sm font-semibold mb-4 underline">
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
                className="text-xl transition-transform duration-300 transform hover:scale-110"
              />
              <Icon
                icon="simple-icons:github"
                className="text-xl transition-transform duration-300 transform hover:scale-110"
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
                className="text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 transform hover:scale-110"
              />
              <Icon
                icon="streamline-logos:c-plus-language-logo-solid"
                className="text-2x transition-transform duration-300 transform hover:scale-110"
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
                icon="devicon:livewire"
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
                className="text-xl transition-transform duration-300 transform hover:scale-110"
              />
              <Icon
                icon="devicon:postman"
                className="text-xl transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold mb-4 underline">
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
                  className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] font-medium border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold mb-4 underline">
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
                  className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] font-medium border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
