import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Menu = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center p-5 lg:px-10 relative z-20">

        <div className="font-bold flex flex-row space-x-2 items-center">
          <span className="text-violet-500 text-4xl md:text-3xl">
            <Icon icon="gridicons:code" />
          </span>
          <h1 className="hidden md:block text-2xl dark:text-white">
            Her<span className="text-violet-500">Stack</span>
          </h1>
        </div>

        <div className="md:hidden z-30">
          <button
            className="block focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <Icon icon="gridicons:cross-small" className="text-5xl text-violet-500" />
            ) : (
              <Icon icon="gridicons:menu" className="text-5xl text-violet-500" />
            )}
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden md:block'
          } fixed inset-0 bg-white/95 dark:bg-black/95 md:dark:bg-transparent backdrop-blur-sm z-20 flex flex-col items-center justify-center md:relative md:bg-transparent md:backdrop-blur-none md:flex md:justify-between md:flex-row`}
        >
          <ul className="flex flex-col items-center md:flex-row md:space-y-0 gap-x-7">
            {Menu.map((item) => (
              <li key={item.name} className="mb-6 md:mb-0">
                <a
                  href={item.href}
                  className="text-gray-900 dark:text-white hover:text-violet-500 dark:hover:text-violet-400 block transition ease-linear text-xl md:text-lg lg:text-xl font-bold"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
