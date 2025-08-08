import React from 'react'
import TextPressure from '../TextAnimations/TextPressure/TextPressure';

export const Hero = () => {
  return (
    <>
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-4 px-4 sm:px-6 lg:px-14 mt-20">
        <article className="flex flex-col items-center justify-center space-y-4 sm:space-y-8 w-full px-4 sm:px-6 md:px-10">
           <TextPressure
              text="She Builds. She Leads."
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              minFontSize={28}
              textColor="text-black dark:text-white"
              className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-tight"
            />
        <p className="text-gray-600 dark:text-gray-400 italic text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-2xl">
        Code. Create. Inspire.</p>
        </article>
    </section>
    </>
  )
}
