import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/UI/Carousel";

const projects = [
  {
    title: "Web-based Budgeting System",
    short: "PLM's Budgeting Office ERP system using Laravel Framework.",
    long: `Contributed to the front-end development for the budgeting office of the Pamantasan ng
Lungsod ng Maynila, created by PLM 3rd year BS Computer Science students using the
Laravel Framework.`,
    role: "Support Programmer",
    techstack: [
      "PHP",
      "HTML5",
      "TAILWINDCSS",
      "LARAVEL",
      "LIVEWIRE",
      "PHPMYADMIN",
      "GIT",
    ],
    image: "images/BUDGETING.jpg",
    link: "https://github.com/alrlabajo/budgeting",
  },
  {
    title: "Imperial Code",
    short: "a C-based Victorian-inspired syntax.",
    long: `A procedural programming language
based on C, designed for speed, efficiency, and clear understanding of core coding concepts.
Inspired by the elegance and innovation of the Victorian era, it blends C's power with a refined,
historically themed syntax to offer a sophisticated coding experience.`,
    role: "Lead Programmer",
    techstack: ["PYTHON", "PYQT", "GIT"],
    image: "images/IDE.png",
    link: "https://github.com/alrlabajo/ImperialCode",
  },
  {
    title: "Gather Up",
    short: "Platform for college event management.",
    long: `Contributed to the backend development for an event management system created by BSCS
4-1 Group 6 designed for college organizations that provides a platform to organize, manage,
and promote their events using Python Django.`,
    role: "Backend Developer",
    techstack: ["PYTHON", "DJANGO", "HTML5", "BOOTSTRAP", "GIT"],
    image: "images/GATHERUP.jpg",
    link: "https://github.com/alrlabajo/GatherUp",
  },
  {
    title: "VizKidz",
    short:
      "An innovative platform designed to visualize, analyze, and share insights effortlessly.",
    long: `Contributed to the frontend development of VizKidz, an innovative platform designed to visualize, analyze, and share insights effortlessly. The platform aims to provide users with powerful tools for data exploration and presentation, making it easier to derive meaningful conclusions from complex datasets.`,
    role: "Frontend Developer",
    techstack: ["PYTHON", "DJANGO", "HTML5", "TAILWINDCSS", "GIT"],
    image: "images/VizKidz.jpg",
    link: "",
  },
  {
    title: "PhishPatrol",
    short: "An Android mobile application to detect Filipino phishing SMS.",
    long: "Contributed to the development of PhishPatrol, designed to classify incoming messages whether it is a phishing message or not, using the enhanced Generalized Mean Distance K-Nearest Neighbor algorithm.",
    role: "Programmer",
    techstack: [
      "DART",
      "PYTHON",
      "FLUTTER",
      "NUMPY",
      "PANDAS",
      "SCIKIT-LEARN",
      "SCIPY",
      "NLTK",
      "GIT",
    ],
    image: "images/thesis.JPG",
    link: "",
  },
  {
    title: "GitHub Profile Finder",
    short: "A website to find GitHub profiles.",
    long: `A website I created using HTML, TailwindCSS and ReactJS to practice my frontend skills more. With the use of Github API to fetch the user data.`,
    role: "Programmer",
    techstack: ["REACT", "HTML5", "TAILWINDCSS", "GITHUB API", "GIT"],
    image: "images/git.gif",
    link: "https://gitchecks.vercel.app/",
  },
  {
    title: "4th of July Portfolio",
    short: "A personal portfolio website.",
    long: `A personal portfolio website I created using HTML, TailwindCSS and ReactJS to showcase 4th of July's works.`,
    role: "Programmer",
    techstack: ["REACT", "HTML5", "TAILWINDCSS"],
    image: "images/4th.gif",
    link: "https://4th-of-july.vercel.app/",
  },
  {
    title: "KanDo",
    short: "Organize tasks. Write notes. Get things done.",
    long: `A straightforward yet effective desktop application that combines a markdown text editor and a Kanban board. This makes task management and note-taking easy in one place, which is designed to enhance productivity and focus.`,
    role: "Designer",
    techstack: ["FIGMA"],
    image: "images/Board-2.png",
    link: "",
  },
  {
    title: "Trackly",
    short: "Track your expenses, income, and savings all in one app.",
    long: `A web application that helps users manage their personal finances by tracking expenses, income, and savings in one convenient platform. Designed to provide insights and promote better financial habits.`,
    role: "Fullstack Developer",
    techstack: ["MONGODB", "EXPRESSJS", "REACTJS", "NODEJS", "TAILWINDCSS"],
    image: "images/trackly.gif",
    link: "",
  },
  {
    title: "FaithFinder",
    short: "Find spiritual guidance and community events.",
    long: `FaithFinder is a mobile-first web application that helps people seeking spiritual guidance find nearby churches, discover community events, and share prayer requests. It also empowers small community churches to be more visible and connect with people in their area. The app is open to all denominations, free for public use, and requires no downloading.`,
    role: "Fullstack Developer",
    techstack: ["MONGODB", "EXPRESSJS", "REACTJS", "NODEJS", "TAILWINDCSS"],
    image: "images/faithfinder.png",
    link: "https://faithfinders.vercel.app/",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-2 px-4 sm:px-6 lg:px-14 mt-16 w-full max-w-4xl ">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-center my-4 gap-4 sm:gap-6 lg:gap-10">
            <h1 className="text-6xl font-semibold leading-none text-left">
              Projects<span className="text-violet-500">.</span>
            </h1>
            <p className="text-xs leading-relaxed mt-4 lg:mt-8 max-w-2xl">
              These projects are combination of my school and personal works. On
              my free time, I like to create projects that would help solve
              problems and benefit me and others.
            </p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-1">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <div
                      className="backdrop-blur-sm rounded-lg p-4 transition-all duration-300 cursor-pointer border border-gray-500/35 h-full flex flex-col"
                      onClick={() => openModal(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover rounded-lg mb-3 sm:mb-4 flex-shrink-0"
                      />
                      <div className="flex-grow flex flex-col">
                        <h3 className="text-sm font-bold mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className=" mb-2 text-xs flex-grow line-clamp-3">
                          {project.short}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {project.techstack
                            .slice(0, 3)
                            .map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-zinc-300/30 rounded-full text-[8px] font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.techstack.length > 3 && (
                            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-300/30 rounded-full text-[8px] font-medium">
                              +{project.techstack.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-xs font-medium">
                            {project.role}
                          </span>
                          <Icon
                            icon="tabler:arrow-right"
                            className="text-lg sm:text-xl flex-shrink-0 block sm:hidden md:block"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex xl:flex" />
            <CarouselNext className="hidden lg:flex xl:flex" />
          </Carousel>

          {selectedProject && (
            <div
              className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50"
              onClick={closeModal}
            >
              <div
                className="rounded-lg w-full bg-white text-zinc-950 max-w-xs sm:max-w-lg lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 rounded-full p-1"
                >
                  <Icon icon="tabler:x" className="text-xl" />
                </button>

                <h2 className="text-xl font-bold mb-2">
                  {selectedProject.title}
                </h2>

                <p className="text-violet-600 font-medium mb-2 text-sm">
                  {selectedProject.role}
                </p>

                <p className="mb-4 leading-relaxed text-xs">
                  {selectedProject.long}
                </p>

                <div className="mb-2">
                  <h3 className="text-sm font-semibold text-black dark:text-white mb-2">
                    Tech Stack:
                  </h3>
                  <div className="flex flex-wrap gap-y-4 space-x-2">
                    {selectedProject.techstack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-[10px] font-medium border border-gray-300 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-24 sm:h-40 lg:h-48 object-cover rounded-lg mb-2"
                    />
                  </div>
                </div>
                {selectedProject.link && selectedProject.link.trim() !== "" && (
                  <button
                    onClick={() => window.open(selectedProject.link, "_blank")}
                    className="mt-4 w-full bg-zinc-950 text-white rounded-lg py-2 font-medium transition-colors"
                  >
                    View Project
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
