import React from 'react'

export const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-[20%] left-[20%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-400/15 rounded-full blur-2xl animate-bounce"></div>

      <div className="absolute bottom-[20%] right-[20%] w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-indigo-500/10 rounded-full blur-3xl animate-ping"></div>

      <div className="absolute top-[25%] right-[25%] w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-violet-300/25 rounded-full blur-xl animate-pulse delay-700"></div>

      <div className="absolute bottom-[25%] left-[25%] w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-purple-600/15 rounded-full blur-2xl animate-bounce delay-300"></div>

      <div className="absolute top-[15%] right-[35%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-violet-400/30 rounded-full blur-md animate-ping delay-1000"></div>

      <div className="absolute bottom-[15%] left-[15%] w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-purple-500/20 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="absolute top-[65%] right-[15%] w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-indigo-400/25 rounded-full blur-md animate-bounce delay-1500"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/5 via-transparent to-purple-900/5"></div>
    </div>
  )
}
