import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NAV_MENU_DATA as Menu } from "../utils/data";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (isMenuOpen) setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
      <div className="flex justify-between md:justify-center items-center p-5 lg:px-10 relative z-20 w-full max-w-4xl mx-auto">
        <div className="md:hidden font-bold flex flex-row space-x-2 items-center">
          <span className="text-violet-500 text-3xl">
            <Icon icon="gridicons:code" />
          </span>
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden z-30">
          <button
            className="block focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <Icon
                icon="material-symbols:close-rounded"
                className="text-4xl text-violet-500"
              />
            ) : (
              <Icon
                icon="ci:hamburger-md"
                className="text-4xl text-violet-500"
              />
            )}
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden md:block"
          } fixed inset-0 bg-neutral-50 dark:bg-zinc-950 backdrop-blur-sm z-20 flex flex-col items-center justify-center md:relative md:bg-transparent md:backdrop-blur-none md:flex md:justify-center md:flex-row`}
        >
          <ul className="flex flex-col items-center md:flex-row md:space-y-0 gap-x-7">
            {Menu.map((item) => (
              <li key={item.id} className="mb-6 md:mb-0">
                <button
                  className={` hover:text-violet-500 block transition ease-linear text-base px-2 py-1 rounded-full text-gray-950 dark:text-white ${
                    location.pathname === item.path
                      ? "font-bold text-gray-700 underline"
                      : "hover:text-violet-500"
                  }`}
                  onClick={() => handleClick(item.path)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <a
              href="LABAJO_CV.pdf"
              class="bg-indigo-500/95 hover:bg-indigo-400/95 text-white font-medium text-xs py-2 px-4 rounded-full inline-flex items-center justify-center"
            >
              <span>Hire me</span>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
