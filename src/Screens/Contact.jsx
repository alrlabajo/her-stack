import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center w-full px-2 sm:px-6">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-2">
        <div className="w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-center sm:text-left text-gray-950 dark:text-white">
            Get in touch<span className="text-violet-500">.</span>
          </h1>
        </div>
        <div className="w-full mt-6 flex flex-col items-center gap-3 text-base sm:flex-row sm:justify-end sm:gap-0 sm:text-xl text-right">
          <a
            href="mailto:alrlabajo@gmail.com"
            className="text-violet-500 dark:text-violet-400 hover:underline"
          >
            email
          </a>
          <span className="mx-2 text-gray-950 dark:text-white hidden sm:inline">
            |
          </span>
          <a
            href="https://www.linkedin.com/in/likeslabajo"
            className="text-violet-500 dark:text-violet-400 hover:underline"
          >
            linkedin
          </a>
          <span className="mx-2 text-gray-950 dark:text-white hidden sm:inline">
            |
          </span>
          <a
            href="https://github.com/alrlabajo"
            className="text-violet-500 dark:text-violet-400 hover:underline"
          >
            github
          </a>
          <span className="mx-2 text-gray-950 dark:text-white hidden sm:inline">
            |
          </span>
          <a
            href="https://facebook.com/chkkngs"
            className="text-violet-500 dark:text-violet-400 hover:underline"
          >
            facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
