import React from "react";
import TextType from "../TextAnimations/TextType/TextType";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-2 px-4 sm:px-6 lg:px-14 text-gray-950 dark:text-white">
        <div className="w-full">
          <TextType
            text={["she builds.", "she leads."]}
            typingSpeed={120}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-left"
          />
        </div>
        <div className="w-full mt-8 sm:mt-10">
          <h1 className="text-base sm:text-lg md:text-xl font-regular text-left text-violet-500">
            code. create. inspire
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
