import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center w-full">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-2 px-6">
        <div className="w-full">
          <h1 className="text-6xl font-semibold text-left text-gray-950 dark:text-white">
            Get in touch.
          </h1>
        </div>
        <div className="w-full mt-6 text-right text-xl">
          <a
            href="mailto:alrlabajo@gamil.com"
            className="text-violet-500 hover:underline"
          >
            email
          </a>
          <span className="mx-2 text-gray-950 dark:text-white">|</span>
          <a
            href="https://www.linkedin.com/in/likeslabajo"
            className="text-violet-500 hover:underline"
          >
            linkedin
          </a>
          <span className="mx-2 text-gray-950 dark:text-white">|</span>
          <a
            href="https://github.com/alrlabajo"
            className="text-violet-500 hover:underline"
          >
            github
          </a>
          <span className="mx-2 text-gray-950 dark:text-white">|</span>
          <a
            href="https://facebook.com/chkkngs"
            className="text-violet-500 hover:underline"
          >
            facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
