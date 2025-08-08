import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"

const projects = [
    {
        title: "Web-based Budgeting System",
        short: "PLM's Budgeting Office ERP system using Laravel Framework.",
        long:`Contributed to the front-end development for the budgeting office of the Pamantasan ng
Lungsod ng Maynila, created by PLM 3rd year BS Computer Science students using the
Laravel Framework.`,
        role:"Support Programmer",
        techstack:["PHP","HTML5","TAILWINDCSS","LARAVEL","LIVEWIRE","PHPMYADMIN","GIT"],
        image:"src/images/BUDGETING.jpg",
        link:"",
    },
    {
        title: "Imperial Code",
        short: "a C-based Victorian-inspired syntax.",
        long:`A procedural programming language
based on C, designed for speed, efficiency, and clear understanding of core coding concepts.
Inspired by the elegance and innovation of the Victorian era, it blends C's power with a refined,
historically themed syntax to offer a sophisticated coding experience.`,
        role:"Lead Programmer",
        techstack:["PYTHON","PYQT","GIT"],
        image:"src/images/IDE.png",
        link:"",
    },
    {
        title: "Gather Up",
        short: "Platform for college event management.",
        long:`Contributed to the backend development for an event management system created by BSCS
4-1 Group 6 designed for college organizations that provides a platform to organize, manage,
and promote their events using Python Django.`,
        role:"Backend Developer",
        techstack:["PYTHON","DJANGO","HTML5","BOOTSTRAP","GIT"],
        image:"src/images/GATHERUP.JPG",
        link:"",
    },
    {
        title: "VizKidz",
        short: "An innovative platform designed to visualize, analyze, and share insights effortlessly.",
        long:`Contributed to the frontend development of VizKidz, an innovative platform designed to visualize, analyze, and share insights effortlessly. The platform aims to provide users with powerful tools for data exploration and presentation, making it easier to derive meaningful conclusions from complex datasets.`,
        role:"Frontend Developer",
        techstack:["PYTHON","DJANGO","HTML5","TAILWINDCSS","GIT"],
        image:"src/images/VizKidz.jpg",
        link:"",
    },
    {
        title: "PhishPatrol",
        short: "An Android mobile application to detect Filipino phishing SMS.",
        long:"Contributed to the development of PhishPatrol, designed to classify incoming messages whether it is a phishing message or not, using the enhanced Generalized Mean Distance K-Nearest Neighbor algorithm.",
        role:"Programmer",
        techstack:["DART","PYTHON","FLUTTER","NUMPY","PANDAS","SCIKIT-LEARN","SCIPY","NLTK","GIT"],
        image:"src/images/thesis.jpg",
        link:"",
    },
    {
        title: "GitHub Profile Finder",
        short: "A website to find GitHub profiles.",
        long:`A website I created using HTML, TailwindCSS and ReactJS to practice my frontend skills more. With the use of Github API to fetch the user data.`,
        role:"Programmer",
        techstack:["REACT","HTML5","TAILWINDCSS","GITHUB API","GIT"],
        image:"src/images/profinder.png",
        link:"",
    },
]

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
    <section id="projects" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-4 px-4 sm:px-6 lg:px-14 mt-20">
      <div className="w-full mx-auto px-6 sm:px-6 md:px-12 lg:px-14">
        <h1 className="text-black dark:text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 font-sans">
          Projects<span className="text-violet-500">.</span>
        </h1>

        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-1">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <div
                    className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 dark:hover:bg-gray-900/70 transition-all duration-300 cursor-pointer border border-gray-200/20 h-full flex flex-col"
                    onClick={() => openModal(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg mb-3 sm:mb-4 flex-shrink-0"
                    />
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 sm:mb-3 font-sans line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 font-sans text-xs sm:text-sm flex-grow line-clamp-3">
                        {project.short}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.techstack.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-violet-300/30 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs sm:text-xs font-medium font-sans"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techstack.length > 3 && (
                          <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-300/30 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-xs font-medium font-sans">
                            +{project.techstack.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs sm:text-sm text-violet-600 dark:text-violet-400 font-medium font-sans">
                          {project.role}
                        </span>
                        <Icon icon="tabler:arrow-right" className="text-violet-500 text-lg sm:text-xl flex-shrink-0 block sm:hidden md:block" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>


        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50" onClick={closeModal}>
            <div
              className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-xs sm:max-w-lg lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10 bg-white/80 dark:bg-gray-900/80 rounded-full p-1"
              >
                <Icon icon="tabler:x" className="text-xl sm:text-2xl" />
              </button>

              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2 sm:mb-3 font-sans pr-8">
                {selectedProject.title}
              </h2>

              <p className="text-violet-600 dark:text-violet-400 font-medium mb-3 sm:mb-4 font-sans text-sm sm:text-base">
                {selectedProject.role}
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed font-sans text-sm sm:text-base">
                {selectedProject.long}
              </p>

              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-2 font-sans">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techstack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 bg-violet-300/30 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs sm:text-sm font-medium font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                  <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg mb-3 sm:mb-4"
              />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
};
