import React from 'react'

const AboutHero = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-28 md:pb-10 lg:pt-36 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-black relative z-10">
        <h5 className="w-full font-mono text-white text-lg sm:text-xl md:text-2xl">
          ABOUT US
        </h5>
        <h5 className="w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-normal">
          This is the power of a truly integrated system. We are more than a holding company. We are a unified intelligence. Welcome to Arcane Holding—where complexity is clarified, and extraordinary value is unlocked.
        </h5>
        <div
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-cover bg-center rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-none"
          style={{ backgroundImage: "url('/assets/about.jpeg')" }}>
        </div>
    </div>
  )
}

export default AboutHero