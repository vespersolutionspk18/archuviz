import React from 'react'

const AboutWelcome = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-start py-16 md:py-24 lg:py-36 px-4 md:px-8 lg:px-16 bg-white relative z-10">
        <h5 className="w-full lg:w-1/3 font-mono text-black text-xl md:text-2xl">
          THE ARCANE ADVANTAGE
        </h5>
        <h5 className="w-full lg:w-2/3 text-black text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter">
          This is the power of a truly integrated system. We are more than a holding company. We are a unified intelligence. Welcome to Arcane Holding—where complexity is clarified, and extraordinary value is unlocked.
        </h5>
    </div>
  )
}

export default AboutWelcome